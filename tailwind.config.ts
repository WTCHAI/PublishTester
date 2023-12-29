import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors :{
        BaseWhite : "#F8F9FA",
        BaseGraphite : "#414244",
        BaseTitatium : "#73706F",
        BaseCharcoal : "#3B4248",
        BaseLightCharcoal :"rgb(81, 86, 90)" , 
        BaseLightGrey : "rgb(232, 232, 232)"
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
      }
    },
  },
  plugins: [],
}
export default config
