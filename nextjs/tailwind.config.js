import typography from '@tailwindcss/typography';

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
    typography: (theme) => ({
      DEFAULT: {
        css: {
          maxWidth: '100%',
          color: theme('colors.textPrimary'),
          lineHeight: '1.8',

          // 見出し
          h1: {
            fontSize: '2rem',
            fontWeight: '700',
            borderBottom: `1px solid ${theme('colors.border')}`,
            margin: '1.8rem 0 1rem',
          },
          h2: {
            fontSize: '1.6rem',
            fontWeight: '700',
            margin: '1.8rem 0 1rem',
          },
          h3: {
            fontSize: '1.4rem',
            fontWeight: '700',
            margin: '1.8rem 0 1rem',
          },
          h4: {
            fontSize: '1.2rem',
            fontWeight: '700',
            margin: '1.8rem 0 1rem',
          },
          h5: {
            fontSize: '1.1rem',
            fontWeight: '700',
            margin: '1.8rem 0 1rem',
          },

          // 段落
          p: {
            margin: '1rem 0 0.5rem',
          },

          // コードブロック
          'pre, code': {
            backgroundColor: 'rgb(40, 42, 54)',
            color: 'rgb(248, 248, 242)',
            borderRadius: '8px',
          },
          pre: {
            overflowX: 'auto',
            padding: '1rem',
          },
          'div pre': {
            fontSize: '0.9rem',
            padding: '2%',
            overflowX: 'auto',
            borderRadius: '8px',
          },

          // 引用
          blockquote: {
            borderLeft: `4px solid ${theme('colors.border')}`,
            paddingLeft: '1rem',
            fontStyle: 'italic',
            color: theme('colors.textSecondary'),
            margin: '2rem 0',
          },

          // テーブル
          table: {
            width: '100%',
            margin: '2rem 0',
          },
          th: {
            backgroundColor: theme('colors.bgSub'),
            padding: '1rem',
            textAlign: 'left',
          },
          td: {
            padding: '1rem',
            textAlign: 'left',
          },

          // 画像
          img: {
            margin: '1rem 0',
            borderRadius: '8px',
          },

          // リンク
          a: {
            color: theme('colors.link'),
            textDecoration: 'underline',
          },

          // 水平線
          hr: {
            margin: '4rem 0',
            border: 'none',
            height: '1px',
            backgroundColor: theme('colors.border'),
          },

          // リスト
          ul: {
            margin: '0.5rem 0 0.5rem 2rem',
            listStyleType: 'disc',
          },
          ol: {
            margin: '0.5rem 0 0.5rem 2rem',
            listStyleType: 'decimal',
          },
        },
      },
    }),
  },
  plugins: [],
};
