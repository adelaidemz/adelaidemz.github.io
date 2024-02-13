import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig ({
  plugins: [react()],
  root: resolve(__dirname, 'src'),
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        stellar: resolve(__dirname, 'src/pages/stellar.html'),
        markov: resolve(__dirname, 'src/pages/markov.html'),
        conway: resolve(__dirname, 'src/pages/conway.html'),
      },
    },
  },
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp"
    },
  },
})
