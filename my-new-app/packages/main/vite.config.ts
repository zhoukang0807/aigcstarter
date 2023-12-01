import { builtinModules } from 'module'
import { defineConfig } from 'vite'
import { join } from 'path'

export default defineConfig({
  root: __dirname,
  build: {
    outDir: '../../dist/main',
    emptyOutDir: true,
    minify: process.env./* from mode option */NODE_ENV === 'production',
    // https://github.com/caoxiemeihao/electron-vue-vite/issues/61
    sourcemap: 'inline',
    rollupOptions: {
      input: {
        // multiple entry
        index: join(__dirname, 'index.ts'),
      },
      external: [
        'electron',
        ...builtinModules,
      ],
    },
  },
})
