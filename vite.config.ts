import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // 打包配置
  build: {
    lib: {
      entry:  'packages/index.ts', // 设置入口文件
      name: '3Darts', // 起个名字，安装、引入用
      //fileName: (format) => `3DSentry.${format}.js` // 打包后的文件名
      fileName: (format) => `3Darts.${format}.js` // 打包后的文件名
    },
    sourcemap: true, // 输出.map文件
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        }
      }
    }
  },
  plugins: [vue()],
})
