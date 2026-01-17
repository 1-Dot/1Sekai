<script setup lang="ts">
import { useData } from 'vitepress'

interface WhatsNewItem {
  title: string
  details: string
  link?: string
  linkText?: string
}

const { frontmatter } = useData()
const items = frontmatter.value.whatsnew as WhatsNewItem[] | undefined
</script>

<template>
  <div v-if="items && items.length" class="VPFeatures VPHomeFeatures">
    <div class="container">
      <div class="items">
        <div v-for="(item, index) in items" :key="index" class="item grid-4">
          <article class="VPFeature">
            <h2 class="title">{{ item.title }}</h2>
            <p class="details" v-html="item.details"></p>
            <div v-if="item.link" class="link-text">
              <a class="link" :href="item.link">
                {{ item.linkText || '了解更多' }}
                <span class="vpi-arrow-right link-text-icon"></span>
              </a>
            </div>
          </article>
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
  max-width: 1152px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

.item.grid-4 {
  width: 100%;
}

@media (min-width: 640px) {
  .item.grid-4 {
    width: 100%;
  }
}

@media (min-width: 768px) {
  .item.grid-4 {
    width: 100%;
  }
}

@media (min-width: 960px) {
  .item.grid-4 {
    width: 100%;
  }
}

.VPFeature {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.VPFeature:hover {
  border-color: var(--vp-c-brand-1);
}

.VPFeature {
  padding: 24px;
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
