---
title: 在线地图
layout: page
sidebar: false
footer: false
pageClass: map-page
---

<style scoped>
.map-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  z-index: 0;
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>

<style>
/* 仅此页面的 navbar 高斯模糊半透明效果 */
.map-page .VPNav {
  background: rgba(255, 255, 255, 0.75) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
}

.dark .map-page .VPNav {
  background: rgba(30, 30, 32, 0.6) !important;
}

.map-page .VPNavBar {
  background: transparent !important;
}

.map-page .VPNavBar .divider,
.map-page .VPNavBar .divider-line {
  background: transparent !important;
}

.map-page .VPNavScreen {
  height: 100vh;
}
</style>

<div class="map-container">
  <iframe 
    class="map-iframe"
    src="https://mc.1dot.cat:1145"
    allow="fullscreen"
  ></iframe>
</div>
