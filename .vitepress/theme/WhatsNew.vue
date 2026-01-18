<script setup lang="ts">
import { useData } from 'vitepress'
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'

interface WhatsNewItem {
  title: string
  details: string
  link?: string
  linkText?: string
}

interface CarouselImage {
  src: string
  alt?: string
  caption?: string
}

const { frontmatter } = useData()
const items = frontmatter.value.whatsnew as WhatsNewItem[] | undefined
const carouselImages = computed(() => {
  return (frontmatter.value.carousel as CarouselImage[] | undefined) || []
})

// 无限循环：在首尾各添加一个克隆幻灯片
const extendedImages = computed(() => {
  const imgs = carouselImages.value
  if (imgs.length <= 1) return imgs
  // [最后一张, ...原始图片..., 第一张]
  return [imgs[imgs.length - 1], ...imgs, imgs[0]]
})

// 轮播图逻辑 - 实际索引（包含克隆的）
const realIndex = ref(1) // 从1开始，因为0是克隆的最后一张
const isTransitioning = ref(true)
let autoPlayTimer: ReturnType<typeof setInterval> | null = null

// 强制重绘，确保无动画跳转生效
const forceReflow = () => {
  if (carouselWrapperRef.value) {
    // 读取 offsetHeight 会强制浏览器与 Vue 同步布局
    void carouselWrapperRef.value.offsetHeight
  }
}

// 辅助函数：瞬间重置到指定位置（无动画）
const resetToRealPosition = (toIndex: number) => {
  isTransitioning.value = false
  realIndex.value = toIndex
  forceReflow()
}
const displayIndex = computed(() => {
  const len = carouselImages.value.length
  if (len <= 1) return 0
  if (realIndex.value <= 0) return len - 1
  if (realIndex.value >= extendedImages.value.length - 1) return 0
  return realIndex.value - 1
})

// 拖拽/触屏滑动支持
const carouselWrapperRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const dragOffset = ref(0)
let startX = 0
let containerWidth = 0
const minSwipeDistance = 50

const getClientX = (e: MouseEvent | TouchEvent): number => {
  if ('touches' in e) {
    return e.touches[0]?.clientX ?? (e as TouchEvent).changedTouches[0]?.clientX ?? 0
  }
  return e.clientX
}

const handleDragStart = (e: MouseEvent | TouchEvent) => {
  if (carouselImages.value.length <= 1) return

  // 1. 停止自动轮播
  stopAutoPlay()

  // 2. 如果正在动画中或处于克隆边界，需要立即重置状态以防止拖出空心区域
  // 核心修复：无论之前在什么状态，只要开始拖拽，就瞬间定位到"中间"的安全真实节点
  isTransitioning.value = false

  const len = carouselImages.value.length
  // 检查是否处于右侧边界（Clone First）
  if (realIndex.value >= extendedImages.value.length - 1) {
    // 瞬间跳回 Real First
    resetToRealPosition(1)
  }
  // 检查是否处于左侧边界（Clone Last）
  else if (realIndex.value <= 0) {
    // 瞬间跳回 Real Last
    resetToRealPosition(len)
  }

  isDragging.value = true
  startX = getClientX(e)
  containerWidth = carouselWrapperRef.value?.offsetWidth || 1

  if ('preventDefault' in e && e.type === 'mousedown') {
    e.preventDefault()
  }
}

const handleDragMove = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return
  const currentX = getClientX(e)
  const diff = currentX - startX
  const maxDrag = containerWidth * 0.8
  dragOffset.value = Math.max(-maxDrag, Math.min(maxDrag, diff))
}

const handleDragEnd = () => {
  if (!isDragging.value) return
  isDragging.value = false

  // 恢复动画状态（为了回弹或切换动画）
  isTransitioning.value = true

  if (Math.abs(dragOffset.value) > minSwipeDistance) {
    if (dragOffset.value < 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }

  dragOffset.value = 0
  startAutoPlay()
}

const handleMouseLeave = () => {
  if (isDragging.value) {
    handleDragEnd()
  }
  startAutoPlay()
}

const nextSlide = () => {
  if (carouselImages.value.length <= 1) return

  // 边界保护：如果已经在 Clone 1 (len+1)，说明之前的动画还没结束又点了一次
  // 必须瞬间跳回 Real 1 (1)，然后滑向 Real 2 (2)
  if (realIndex.value >= extendedImages.value.length - 1) {
    resetToRealPosition(1)
    // 使用 requestAnimationFrame 确保在下一帧恢复动画
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isTransitioning.value = true
        realIndex.value = 2
      })
    })
    return
  }

  isTransitioning.value = true
  realIndex.value++
}

const prevSlide = () => {
  if (carouselImages.value.length <= 1) return

  // 边界保护：如果已经在 Clone Last (0)
  // 必须瞬间跳回 Real Last (len)，然后滑向 Real Last-1 (len-1)
  if (realIndex.value <= 0) {
    resetToRealPosition(carouselImages.value.length)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isTransitioning.value = true
        realIndex.value = carouselImages.value.length - 1
      })
    })
    return
  }

  isTransitioning.value = true
  realIndex.value--
}

const goToSlide = (index: number) => {
  isTransitioning.value = true
  // 如果当前在克隆位置，先重置回真实位置再跳转
  if (realIndex.value === 0) {
    resetToRealPosition(carouselImages.value.length)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isTransitioning.value = true
        realIndex.value = index + 1
      })
    })
    return
  }
  if (realIndex.value === extendedImages.value.length - 1) {
    resetToRealPosition(1)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isTransitioning.value = true
        realIndex.value = index + 1
      })
    })
    return
  }

  realIndex.value = index + 1
}

// 处理无限循环的边界跳转（动画完成后）
const handleTransitionEnd = () => {
  const len = carouselImages.value.length
  if (len <= 1) return

  // 到达克隆的最后一张（实际是第一张的克隆）
  if (realIndex.value >= extendedImages.value.length - 1) {
    resetToRealPosition(1)
  }
  // 到达克隆的第一张（实际是最后一张的克隆）
  if (realIndex.value <= 0) {
    resetToRealPosition(len)
  }
}

const startAutoPlay = () => {
  stopAutoPlay()
  if (carouselImages.value.length > 1) {
    autoPlayTimer = setInterval(nextSlide, 5000)
  }
}

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

// 计算轮播图的实际偏移
const slidesTransform = computed(() => {
  const baseOffset = -realIndex.value * 100
  return `translateX(calc(${baseOffset}% + ${dragOffset.value}px))`
})

onMounted(() => {
  startAutoPlay()
  document.addEventListener('mouseup', handleDragEnd)
  document.addEventListener('mousemove', handleDragMove as EventListener)
})

onUnmounted(() => {
  stopAutoPlay()
  document.removeEventListener('mouseup', handleDragEnd)
  document.removeEventListener('mousemove', handleDragMove as EventListener)
})
</script>

<template>
  <div v-if="(items && items.length) || carouselImages.length" class="VPFeatures VPHomeFeatures">
    <div class="container">
      <div class="whatsnew-layout">
        <!-- 左侧：更新日志 -->
        <div v-if="items && items.length" class="whatsnew-section">
          <a v-for="(item, index) in items" :key="index" :href="item.link || '#'" class="VPFeature-link">
            <article class="VPFeature">
              <h2 class="title">{{ item.title }}</h2>
              <p class="details" v-html="item.details"></p>
              <div v-if="item.link" class="link-text">
                <span class="link">
                  {{ item.linkText || '了解更多' }}
                  <span class="vpi-arrow-right link-text-icon"></span>
                </span>
              </div>
            </article>
          </a>
        </div>

        <!-- 右侧：轮播图 -->
        <div v-if="carouselImages.length" class="carousel-section">
          <div class="carousel-container" @mouseenter="stopAutoPlay" @mouseleave="handleMouseLeave">
            <div class="carousel-wrapper" ref="carouselWrapperRef" @mousedown="handleDragStart"
              @touchstart="handleDragStart" @touchmove="handleDragMove" @touchend="handleDragEnd">
              <div class="carousel-slides" :class="{ 'is-dragging': isDragging, 'no-transition': !isTransitioning }"
                :style="{ transform: slidesTransform }" @transitionend="handleTransitionEnd">
                <div v-for="(image, index) in extendedImages" :key="index" class="carousel-slide">
                  <img :src="image.src" :alt="image.alt || '服务器截图'" draggable="false" />
                  <div v-if="image.caption" class="carousel-caption">
                    <span class="caption-text">{{ image.caption }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 导航按钮 -->
            <button v-if="carouselImages.length > 1" class="carousel-btn carousel-btn-prev" @click="prevSlide"
              aria-label="上一张">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button v-if="carouselImages.length > 1" class="carousel-btn carousel-btn-next" @click="nextSlide"
              aria-label="下一张">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <!-- 指示点 -->
            <div v-if="carouselImages.length > 1" class="carousel-dots">
              <button v-for="(_, index) in carouselImages" :key="index" class="carousel-dot"
                :class="{ active: displayIndex === index }" @click="goToSlide(index)"
                :aria-label="`跳转到第 ${index + 1} 张图片`" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPHomeFeatures {
  position: relative;
  padding: 0 24px;
  margin-bottom: 8px;
}

@media (min-width: 640px) {
  .VPHomeFeatures {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .VPHomeFeatures {
    padding: 0 64px;
  }
}

.container {
  margin: 0 auto;
  max-width: 1168px;
}

/* 主布局 */
.whatsnew-layout {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
}

@media (min-width: 960px) {
  .whatsnew-layout {
    flex-direction: row;
    gap: 0px;
    align-items: stretch;
    margin-bottom: 0px;
  }
}

/* 更新日志区域 */
.whatsnew-section {
  flex: 1;
  min-width: 0;
}

@media (min-width: 960px) {
  .whatsnew-section {
    padding: 8px;
    padding-top: 0;
    flex: 0 0 50%;
    max-width: 50%;
    /* 使用 aspect-ratio 确保高度与轮播图一致 */
    aspect-ratio: 16 / 9;
    display: flex;
    flex-direction: column;
  }
}

.whatsnew-item {
  height: 100%;
}

.VPFeature-link:not(:last-child) {
  margin-bottom: 8px;
}

@media (min-width: 960px) {
  .VPFeature-link:not(:last-child) {
    margin-bottom: 0;
  }
}

/* 轮播图区域 */
.carousel-section {
  flex: 1;
  min-width: 0;
  order: -1;
}

@media (min-width: 960px) {
  .carousel-section {
    padding: 8px;
    padding-top: 0;
    flex: 0 0 50%;
    max-width: 50%;
    order: 0;
  }
}

/* 自定义滚动条样式 */
.VPFeature .details::-webkit-scrollbar {
  width: 6px;
}

.VPFeature .details::-webkit-scrollbar-track {
  background: transparent;
}

.VPFeature .details::-webkit-scrollbar-thumb {
  background-color: var(--vp-c-divider);
  border-radius: 3px;
}

.VPFeature .details::-webkit-scrollbar-thumb:hover {
  background-color: var(--vp-c-text-3);
}

/* 轮播图容器 */
.carousel-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04);
}

.dark .carousel-container {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.24), 0 1px 3px rgba(0, 0, 0, 0.12);
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: grab;
  touch-action: pan-y pinch-zoom;
}

.carousel-wrapper:active {
  cursor: grabbing;
}

.carousel-slides {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

.carousel-slides.is-dragging,
.carousel-slides.no-transition {
  transition: none;
}

.carousel-slide {
  flex: 0 0 100%;
  position: relative;
}

.carousel-slide img {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px 20px 16px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.3) 60%, transparent 100%);
}

.caption-text {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* 导航按钮 - 适配 VPButton.alt (Ore UI 风格) */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;

  /* Ore UI 基础样式 */
  border-radius: 4px;
  font-weight: bold;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  opacity: 0;
  transition: all ease-out 0.05s, opacity 0.2s ease;
  padding-bottom: 4px;
  /* 模拟立体按钮的内容上浮效果 */

  /* Light Mode 默认样式 (匹配 .VPButton.alt) */
  background-color: #e8e9ed;
  border: 2px solid #8D8E94;
  color: #000000;
  box-shadow: inset 0 -4px #bdbec4,
    inset 3px 3px rgba(255, 255, 255, 0.6),
    inset -3px -7px rgba(255, 255, 255, 0.4);
}

.carousel-container:hover .carousel-btn {
  opacity: 1;
}

/* Hover 状态 */
.carousel-btn:hover {
  background-color: #f2f3f8;
  box-shadow: inset 0 -4px #bdbec4,
    inset 3px 3px rgba(255, 255, 255, 0.8),
    inset -3px -7px rgba(255, 255, 255, 0.6);
  transform: translateY(-50%);
}

/* Active 状态 - 模拟按压效果 */
.carousel-btn:active {
  background-color: #C8C9CD;
  box-shadow: inset 3px 3px rgba(255, 255, 255, 0.8),
    inset -3px -3px rgba(255, 255, 255, 0.6);
  /* 向下位移模拟按压：底部保持位置大致不变，顶部下压 */
  transform: translateY(-50%) translateY(2px);
  height: 36px;
  /* 高度压扁 */
  padding-bottom: 0;
  /* 内容归位 */
}

/* Dark Mode 适配 */
.dark .carousel-btn {
  background-color: #484950;
  border: 2px solid #1E1E1F;
  color: #FFFFFF;
  box-shadow: inset 0 -4px #2C2D33,
    inset 3px 3px rgba(255, 255, 255, 0.1),
    inset -3px -7px rgba(255, 255, 255, 0.05);
}

.dark .carousel-btn:hover {
  background-color: #5D5E64;
  box-shadow: inset 0 -4px #2C2D33,
    inset 3px 3px rgba(255, 255, 255, 0.15),
    inset -3px -7px rgba(255, 255, 255, 0.1);
}

.dark .carousel-btn:active {
  background-color: #2C2D33;
  box-shadow: inset 3px 3px rgba(255, 255, 255, 0.1),
    inset -3px -3px rgba(255, 255, 255, 0.05);
}

.carousel-btn-prev {
  left: 16px;
}

.carousel-btn-next {
  right: 16px;
}

/* 指示点 */
.carousel-dots {
  position: absolute;
  bottom: 16px;
  /*left: 50%;
  transform: translateX(-50%);*/
  right: 20px;
  display: flex;
  gap: 10px;
  z-index: 10;
  padding: 8px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  backdrop-filter: blur(8px);
}

.carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  padding: 0;
}

.carousel-dot:hover {
  background-color: rgba(255, 255, 255, 0.8);
  transform: scale(1.15);
}

.carousel-dot.active {
  background-color: #fff;
  width: 24px;
  border-radius: 4px;
}

/* 卡片样式 */
.VPFeature-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

@media (min-width: 960px) {
  .VPFeature-link {
    height: 100%;
  }
}

.VPFeature {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
  padding: 24px;
  box-sizing: border-box;
  cursor: pointer;
}

@media (min-width: 960px) {
  .VPFeature {
    height: 100%;
    min-height: 100%;
  }
}

.VPFeature:hover {
  border-color: var(--vp-c-brand-1);
}

.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
}

.details {
  flex-grow: 1;
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  /* 在桌面端内容过长时滚动 */
  overflow-y: auto;
  padding-right: 4px;
}

.link-text {
  padding-top: 8px;
}

.link {
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  transition: color 0.25s;
}

.link:hover {
  color: var(--vp-c-brand-2);
}

.link-text-icon {
  margin-left: 6px;
}
</style>
