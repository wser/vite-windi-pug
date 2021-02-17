import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import ViteComponents from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'
import Markdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // to use relative paths in build
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    ViteComponents(),
    Markdown(),
    WindiCSS({
      safelist: 'prose prose-sm m-auto'
    })
  ]
})
