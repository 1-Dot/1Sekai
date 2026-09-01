import type MarkdownIt from 'markdown-it'
import { createRequire } from 'node:module'

type ImageDimensions = { width: number; height: number }

const require = createRequire(import.meta.url)
const remoteImageDimensions = require('./remote-image-dimensions.json') as Record<string, ImageDimensions>

function getAttribute(tag: string, name: string): string | undefined {
  return tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']+)["']`, 'i'))?.[1]
    ?? tag.match(new RegExp(`\\b${name}\\s*=\\s*([^\\s>]+)`, 'i'))?.[1]
}

function addAttribute(tag: string, name: string, value: number): string {
  return tag.replace(/\s*\/?>(?=\s*$)/, match => ` ${name}="${value}"${match}`)
}

function addHtmlImageDimensions(html: string): string {
  return html.replace(/<img\b[^>]*>/gi, tag => {
    const src = getAttribute(tag, 'src')
    const natural = src ? remoteImageDimensions[src] : undefined
    if (!natural) return tag

    const width = Number(getAttribute(tag, 'width')) || undefined
    const height = Number(getAttribute(tag, 'height')) || undefined

    if (width && !height) {
      return addAttribute(tag, 'height', Math.round(width * natural.height / natural.width))
    }
    if (!width && height) {
      return addAttribute(tag, 'width', Math.round(height * natural.width / natural.height))
    }
    if (!width && !height) {
      return addAttribute(addAttribute(tag, 'width', natural.width), 'height', natural.height)
    }
    return tag
  })
}

export function addRemoteImageDimensions(md: MarkdownIt): void {
  const renderImage = md.renderer.rules.image
  md.renderer.rules.image = (tokens, index, options, env, self) => {
    const token = tokens[index]
    const src = token.attrGet('src')
    const size = src ? remoteImageDimensions[src] : undefined

    if (size) {
      if (!token.attrGet('width')) token.attrSet('width', String(size.width))
      if (!token.attrGet('height')) token.attrSet('height', String(size.height))
    }

    return renderImage
      ? renderImage(tokens, index, options, env, self)
      : self.renderToken(tokens, index, options)
  }

  for (const rule of ['html_inline', 'html_block'] as const) {
    const renderHtml = md.renderer.rules[rule]
    md.renderer.rules[rule] = (tokens, index, options, env, self) => {
      const html = renderHtml
        ? renderHtml(tokens, index, options, env, self)
        : tokens[index].content
      return addHtmlImageDimensions(html)
    }
  }
}
