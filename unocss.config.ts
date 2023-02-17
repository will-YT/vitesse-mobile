import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['cross-center', 'flex items-center justify-center'],
    ['color-base', 'text-[#262626]'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out !outline-none'],
  ],
  rules: [
    [/^bg-img-\[(.*)\]$/, ([,c]) => ({ 'background': `url(${c}) no-repeat top center`, 'background-size': 'contain' })],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  postprocess: (util) => {
    util.entries.forEach((i) => {
      const pxRE = /^-?[\.\d]+px$/
      const value = i[1]
      if (value && typeof value === 'string' && pxRE.test(value))
        i[1] = `${(+value.slice(0, -2) * 0.133333).toFixed(3)}vw`
    })
  },
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})
