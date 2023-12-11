import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig ({
  root: resolve(__dirname, 'src'),
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        stellar: resolve(__dirname, 'src/pages/stellar.html'),
        markov: resolve(__dirname, 'src/pages/markov.html'),
        testpage: resolve(__dirname, 'src/testpage.html'),
        test: resolve(__dirname, 'src/test.html'),
      },
    },
  },
})
