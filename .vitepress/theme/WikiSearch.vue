<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'

interface WikiResult {
    title: string
    snippet: string
    pageid: number
    thumbnail?: string
}

const wikiResults = ref<WikiResult[]>([])
const loading = ref(false)
const error = ref('')
const searchQuery = ref('')
const isSearchOpen = ref(false)
const containerReady = ref(false)

// 防抖搜索
let debounceTimer: ReturnType<typeof setTimeout> | null = null

watch(searchQuery, (query) => {
    if (debounceTimer) clearTimeout(debounceTimer)

    if (!query || query.length < 2) {
        wikiResults.value = []
        return
    }

    debounceTimer = setTimeout(() => {
        searchWiki(query)
    }, 400)
})

async function searchWiki(query: string) {
    loading.value = true
    error.value = ''

    try {
        // 使用 MediaWiki API 搜索
        const searchParams = new URLSearchParams({
            action: 'query',
            list: 'search',
            srsearch: query,
            srwhat: 'text',
            srlimit: '3',
            format: 'json',
            origin: '*'
        })

        const searchResponse = await fetch(`https://zh.minecraft.wiki/api.php?${searchParams}`)

        if (!searchResponse.ok) {
            throw new Error('网络请求失败')
        }

        const searchData = await searchResponse.json()

        if (searchData.query?.search && searchData.query.search.length > 0) {
            const titles = searchData.query.search.map((item: any) => item.title).join('|')

            // 获取页面图片
            const imageParams = new URLSearchParams({
                action: 'query',
                titles: titles,
                prop: 'pageimages',
                pithumbsize: '80',
                format: 'json',
                origin: '*'
            })

            const imageResponse = await fetch(`https://zh.minecraft.wiki/api.php?${imageParams}`)
            const imageData = await imageResponse.json()

            const pageImages: Record<number, string> = {}
            if (imageData.query?.pages) {
                Object.values(imageData.query.pages).forEach((page: any) => {
                    if (page.thumbnail?.source) {
                        pageImages[page.pageid] = page.thumbnail.source
                    }
                })
            }

            wikiResults.value = searchData.query.search.map((item: any) => ({
                title: item.title,
                snippet: item.snippet.replace(/<\/?[^>]+(>|$)/g, ''),
                pageid: item.pageid,
                thumbnail: pageImages[item.pageid]
            }))
        } else {
            wikiResults.value = []
        }
    } catch (e) {
        error.value = '无法连接到 Minecraft Wiki'
        wikiResults.value = []
    } finally {
        loading.value = false
    }
}

function getWikiUrl(title: string) {
    return `https://zh.minecraft.wiki/w/${encodeURIComponent(title)}`
}

// 监听搜索框的打开和输入
let observer: MutationObserver | null = null

function checkSearchBox() {
    const searchBox = document.querySelector('.VPLocalSearchBox')

    if (searchBox) {
        isSearchOpen.value = true

        const input = searchBox.querySelector('.search-input') as HTMLInputElement
        const shell = searchBox.querySelector('.shell')
        const results = searchBox.querySelector('.results')

        if (input) {
            searchQuery.value = input.value

            // 监听输入
            if (!input.dataset.wikiWatched) {
                input.dataset.wikiWatched = 'true'
                input.addEventListener('input', () => {
                    searchQuery.value = input.value
                })
            }
        }

        // 确保容器存在 - 创建分栏布局
        if (shell && results && !shell.querySelector('.search-split-container')) {
            // 创建分栏容器
            const splitContainer = document.createElement('div')
            splitContainer.className = 'search-split-container'

            // 创建本地搜索容器
            const localContainer = document.createElement('div')
            localContainer.className = 'local-search-container'

            // 创建 Wiki 搜索容器
            const wikiContainer = document.createElement('div')
            wikiContainer.className = 'wiki-search-container'
            wikiContainer.id = 'wiki-search-mount'

            // 将 results 移入 localContainer
            results.parentNode?.insertBefore(splitContainer, results)
            localContainer.appendChild(results)
            splitContainer.appendChild(localContainer)
            splitContainer.appendChild(wikiContainer)

            nextTick(() => {
                containerReady.value = true
            })
        } else if (shell?.querySelector('#wiki-search-mount')) {
            containerReady.value = true
        }
    } else {
        isSearchOpen.value = false
        containerReady.value = false
        searchQuery.value = ''
        wikiResults.value = []
    }
}

onMounted(() => {
    if (typeof window === 'undefined') return

    observer = new MutationObserver(() => {
        checkSearchBox()
    })

    observer.observe(document.body, {
        childList: true,
        subtree: true
    })

    // 初始检查
    checkSearchBox()
})

onUnmounted(() => {
    observer?.disconnect()
})
</script>

<template>
    <Teleport to="#wiki-search-mount" v-if="isSearchOpen && containerReady && searchQuery && searchQuery.length >= 2">
        <div class="wiki-search-section">
            <div class="wiki-header">
                <svg class="wiki-icon" viewBox="0 0 24 24" width="18" height="18">
                    <path fill="currentColor"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                <span>Minecraft Wiki</span>
            </div>

            <div class="wiki-content">
                <div v-if="loading" class="wiki-loading">
                    <span class="loading-spinner"></span>
                    <span>正在搜索...</span>
                </div>

                <div v-else-if="error" class="wiki-error">
                    {{ error }}
                </div>

                <ul v-else-if="wikiResults.length > 0" class="wiki-results">
                    <li v-for="result in wikiResults" :key="result.pageid" class="wiki-result">
                        <a :href="getWikiUrl(result.title)" target="_blank" rel="noopener noreferrer" class="wiki-link">
                            <div class="wiki-thumb" v-if="result.thumbnail">
                                <img :src="result.thumbnail" :alt="result.title" loading="lazy" />
                            </div>
                            <div class="wiki-info">
                                <div class="wiki-title">
                                    <span class="wiki-title-text">{{ result.title }}</span>
                                    <svg class="external-icon" viewBox="0 0 24 24" width="10" height="10">
                                        <path fill="currentColor"
                                            d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                                    </svg>
                                </div>
                                <div class="wiki-snippet">{{ result.snippet }}</div>
                            </div>
                        </a>
                    </li>
                </ul>

                <div v-else-if="!loading" class="wiki-no-results">
                    <svg class="no-results-icon" viewBox="0 0 24 24" width="32" height="32">
                        <path fill="currentColor" opacity="0.3"
                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                    <span>未找到相关内容</span>
                </div>
            </div>

            <a :href="`https://zh.minecraft.wiki/w/Special:Search?search=${encodeURIComponent(searchQuery)}`"
                target="_blank" rel="noopener noreferrer" class="wiki-search-more">
                <span>在 Wiki 搜索更多</span>
                <svg viewBox="0 0 24 24" width="14" height="14">
                    <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
            </a>
        </div>
    </Teleport>
</template>

<style scoped>
/* Wiki 搜索面板 - 融入 VitePress 主题 */
.wiki-search-section {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--vp-c-bg);
}

.wiki-header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--vp-c-text-2);
    padding: 12px 16px;
    border-bottom: 1px solid var(--vp-c-divider);
}

.wiki-icon {
    color: rgb(60, 133, 39);
    flex-shrink: 0;
}

.wiki-content {
    flex: 1;
    overflow-y: auto;
    padding: 6px;
}

.wiki-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 32px 12px;
    font-size: 0.8rem;
    color: var(--vp-c-text-3);
}

.loading-spinner {
    width: 16px;
    height: 16px;
    border: 2px solid var(--vp-c-divider);
    border-top-color: rgb(60, 133, 39);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.wiki-error {
    padding: 20px 16px;
    font-size: 0.8rem;
    color: var(--vp-c-text-3);
    text-align: center;
}

.wiki-results {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.wiki-result {
    border-radius: 4px;
    overflow: hidden;
}

.wiki-link {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 8px 10px;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.15s ease;
    border: 2px solid transparent;
}

.wiki-link:hover {
    background: var(--vp-c-default-soft);
}

.wiki-link:focus {
    outline: none;
    border-color: rgb(60, 133, 39);
}

/* 缩略图样式 */
.wiki-thumb {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 4px;
    overflow: hidden;
    background: var(--vp-c-default-soft);
    display: flex;
    align-items: center;
    justify-content: center;
}

.wiki-thumb img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    image-rendering: pixelated;
}

.wiki-info {
    flex: 1;
    min-width: 0;
}

.wiki-title {
    display: flex;
    align-items: center;
    gap: 4px;
    line-height: 1.4;
}

.wiki-title-text {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--vp-c-text-1);
}

.wiki-link:hover .wiki-title-text {
    color: rgb(60, 133, 39);
}

.dark .wiki-link:hover .wiki-title-text {
    color: rgb(100, 180, 70);
}

.external-icon {
    opacity: 0;
    color: var(--vp-c-text-3);
    flex-shrink: 0;
    transition: opacity 0.15s ease;
}

.wiki-link:hover .external-icon {
    opacity: 0.6;
}

.wiki-snippet {
    font-size: 0.75rem;
    color: var(--vp-c-text-2);
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 2px;
}

.wiki-no-results {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 32px 16px;
    font-size: 0.8rem;
    color: var(--vp-c-text-3);
    text-align: center;
}

.no-results-icon {
    color: var(--vp-c-text-3);
    opacity: 0.5;
}

.wiki-search-more {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin: 6px;
    padding: 8px 12px;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--vp-c-text-2);
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    background: var(--vp-c-default-soft);
    transition: all 0.15s ease;
}

.wiki-search-more:hover {
    color: rgb(60, 133, 39);
    background: rgba(60, 133, 39, 0.1);
}

.dark .wiki-search-more:hover {
    color: rgb(100, 180, 70);
    background: rgba(100, 180, 70, 0.1);
}

.wiki-search-more svg {
    transition: transform 0.15s ease;
    opacity: 0.6;
}

.wiki-search-more:hover svg {
    transform: translateX(2px);
    opacity: 1;
}
</style>
