/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      zen: ['"Zen Maru Gothic"', 'sans-serif'],
    },
    colors: {
      mainBackgroundColor: '#f3f3f3',
      subBackgroundColor: '#d9d9d9',
      mainFontColor: '#434343',
      subFontColor: '#9f9b96',
      white: '#ffffff',
    },
    // container: {
    //   center: true, // コンテナを中央寄せ
    //   padding: '10%', // 左右に10%ずつのパディング
    // },
  },
  plugins: [],
};
