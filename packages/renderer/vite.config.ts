import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import resolve from 'vite-plugin-resolve'
import electron from 'vite-plugin-electron-renderer'
import pkg from '../../package.json'
//@ts-ignore
import { createSvg } from './src/engine/assets/icons/index.js'
import vueJsx from '@vitejs/plugin-vue-jsx'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  mode: process.env.NODE_ENV,
  root: __dirname,
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue({}),
    vueJsx(),
    electron(),
    resolve(
      {
        electron: `
        const { ipcRenderer, shell } = require('electron');
        export {
          ipcRenderer,
          shell,
        }
      `,
      }
    ),
    createSvg(path.join(path.resolve(__dirname, 'src/engine/assets/icons/svg/'), '/')),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/style/global.scss" as *;
        `,
      },
    },
  },
  optimizeDeps: {
  },
  build: {
    outDir: '../../dist/renderer',
    emptyOutDir: true,
    sourcemap: true,
    commonjsOptions: {
      include: [],
    },
  },
  server: {
    host: pkg.env.VITE_DEV_SERVER_HOST,
    port: pkg.env.VITE_DEV_SERVER_PORT,
    proxy: {
      "/api": {
        target: `http://127.0.0.1:3000/`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
