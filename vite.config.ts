import { URL, fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { visualizer } from 'rollup-plugin-visualizer'
import Markdown from 'vite-plugin-md'

export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    // visualizer({
    //   filename: './dist/report.html',
    //   open: true,
    //   brotliSize: true,
    // },
    // ),
    Markdown(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // server: {
  //   open: true,
  // },
})
