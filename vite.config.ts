import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import { IonicResolver, VantResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import postcsspxtoviewport from 'postcss-px-to-viewport'
import Unocss from 'unocss/vite'
import legacy from '@vitejs/plugin-legacy'

// import { visualizer } from 'rollup-plugin-visualizer'

const outputDirMap: any = {
  openapi: 'dist-openapi',
  production: 'dist-app',
}
const assetMap: any = {
  openapi: '',
  production: '',
}
export default ({ mode }: any) => {
  return defineConfig({
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      Vue({
        script: {
          propsDestructure: true,
          defineModel: true,
        },
        include: [/\.vue$/, /\.tsx$/],
      }),
      vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
      }),
      // 兼容插件，可自行修改
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        extensions: ['vue', 'tsx'],
        exclude: ['**/components/*.vue', '**/components/*.tsx'],
        extendRoute(route) {
          if (route.path === '/') {
            // Index is unauthenticated.
            return route
          }
          // Augment the route with meta that indicates that the route requires authentication.
          return {
            ...route,
          }
        },
      }),
      Layouts(),
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'vue/macros',
          '@vueuse/core',
          'pinia',
        ],
        dts: true,
        dirs: [
          './src/composables/**',
        ],
        vueTemplate: true,
      }),

      // https://github.com/antfu/vite-plugin-components
      Components({
        dts: true,
        dirs: ['**/components'],
        resolvers: [VantResolver(), IonicResolver()],
      }),

      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      Unocss(),
      // visualizer({ open: true }),
    ],
    css: {
      postcss: {
        plugins: [
          // postCssPxToRem({
          //   rootValue({ file }: any) {
          //     return file.includes('vant') ? 37.5 : 75
          //   },
          //   propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          // }),
          postcsspxtoviewport({
            unitToConvert: 'px', // 要转化的单位
            viewportWidth: 375, // UI设计稿的宽度
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ['ignore'], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            exclude: [/^(?!.*node_modules\/vant)/], // 设置忽略文件，用正则做目录名匹配
            landscape: false, // 是否处理横屏情况
          }),
          postcsspxtoviewport({
            unitToConvert: 'px', // 要转化的单位
            viewportWidth: 750, // UI设计稿的宽度
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ['ignore'], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            exclude: [/node_modules\/vant/i], // 设置忽略文件，用正则做目录名匹配
            landscape: false, // 是否处理横屏情况
          }),
        ],
      },
    },
    build: {
      outDir: outputDirMap[loadEnv(mode, process.cwd()).VITE_PROJECT_ENV],
      rollupOptions: {
      // 打包资源分类
        output: {
          entryFileNames: 'js/[name].[hash].js',
          chunkFileNames: 'js/[name].[hash].js',
          assetFileNames: '[ext]/[name].[hash].[ext]',
        },
      },
    },
    base: assetMap[loadEnv(mode, process.cwd()).VITE_PROJECT_ENV],
    server: {
      host: '0.0.0.0',
      proxy: {
        '^/api': {
          target: '',
          changeOrigin: true,
          rewrite: (path) => {
            return path.replace(/^\./, '')
          },
        },
      },
    },
  })
}
