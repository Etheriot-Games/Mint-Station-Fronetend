const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tiny: '440px',
      xs: '640px',
      sm: '768px',
      md: '1096px',
      lg: '1280px',
      xl: '1366px',
      '2xl': '1440px',
      extra: '1768px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      red: '#FE2B00',
      gray: '#666264',
      primary: {
        DEFAULT: '#80FF00',
        50: '#FAFF00',
        100: '#D7FFA3',
        200: '#C5C5C5',
        300: '#B3FF52',
        400: '#A2FF00',
        500: '#80FF00',
        600: '#70C700',
        700: '#508F00',
        800: '#315700',
        900: '#09080A',
      },
      secondary: {
        DEFAULT: '#0163C2',
        50: '#7CBEFE',
        100: '#68B4FE',
        200: '#3FA0FE',
        300: '#178CFE',
        400: '#0178EB',
        500: '#0163C2',
        600: '#01478A',
        700: '#001843',
        800: '#000E1B',
        900: '#000000',
      },
    },
    fontFamily: {
      title: ['"Ghost Clan"', 'Helvetica', 'Arial', 'sans-serif'],
      titleExpand: ['"Ghost Clan Expand"', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['"Space Grotesk"', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      xs: ['10px'],
      'xs-bold': ['10px', { fontWeight: 700 }],
      sm: ['12px'],
      'sm-bold': ['12px', { fontWeight: 700 }],
      'sm-button': ['14px', { fontWeight: 700, lineHeight: '22px' }],
      base: ['16px'],
      'base-bold': ['16px', { fontWeight: 700, lineHeight: '86%' }],
      'base-button': ['16px', { fontWeight: 700, lineHeight: '115%' }],
      lg: ['18px'],
      'lg-bold': ['18px', { fontWeight: 700, lineHeight: '86%' }],
      'lg-button': ['20px', { fontWeight: 700, lineHeight: '22px' }],
      xl: ['24px'],
      h4: ['32px'],
      h3: ['36px'],
      h2: ['48px'],
      h1: ['64px'],
      h0: ['72px'],
      extra: ['96px'],
    },
    extend: {
      backgroundImage: {
        main: "url('assets/images/main_bg.png')",
        pathfinder: "url('assets/images/pathfinder_bg.png')",
        battlepass:
          "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.34) 55.52%, #000000 100%), url('assets/images/battle_pass_bg_dark.png')",
        'section-border-light': 'url(assets/images/section_border_light.png)',
        'section-border-dark': 'url(assets/images/section_border_dark.png)',
        'section-border-rotate-light': 'url(assets/images/section_border2_light.png)',
        'section-border-rotate-dark': 'url(assets/images/section_border2_dark.png)',
        'section-border-sm-light': 'url(assets/images/section_border_sm_light.png)',
        'section-border-sm-dark': 'url(assets/images/section_border_sm_dark.png)',
        'input-wrapper-light': 'url(assets/images/input_wrapper_light.png)',
        'input-wrapper-dark': 'url(assets/images/input_wrapper_dark.png)',
        'footer-light': 'url(assets/images/footer_bg_light.png)',
        'footer-dark': 'url(assets/images/footer_bg_dark.png)',
        mobilemenu: "linear-gradient(0deg, rgba(9, 8, 10, 0.7), rgba(9, 8, 10, 0.7)), url('assets/images/mobile_menu_bg.png')",
        gradient: 'var(--gradient-primary)',
      },
      gridTemplateRows: {
        progressbar: 'repeat(auto-fit, minmax(10px, max-content))',
      },
      keyframes: {
        opacity: {
          '0%': { opacity: 0, maxHeight: '0px' },
          '50%': { opacity: 0.5, maxHeight: '120px' },
          '100%': { opacity: 1, maxHeight: '240px' },
        },
        rotate: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        opacity: 'opacity 300ms ease',
        rotate: 'rotate 2000ms ease',
      },
    },
  },
  plugins: [],
}
