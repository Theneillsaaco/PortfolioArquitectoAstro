/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9f0',
                    100: '#dcf2dc',
                    200: '#b9e5b9',
                    300: '#8fd38f',
                    400: '#7fa378',
                    500: '#4b7d49',
                    600: '#355e35',
                    700: '#2a4a2a',
                    800: '#1f3a1f',
                    900: '#152b15',
                },
                secondary: {
                    50: '#f5f2ed',
                    100: '#e8e0d4',
                    200: '#d4c8b8',
                    300: '#b5a494',
                    400: '#8b5e3c',
                    500: '#6f5f50',
                    600: '#4d3f33',
                    700: '#2e1f15',
                    800: '#1a0f0a',
                    900: '#0f0805',
                },
                accent: {
                    50: '#fdf7f0',
                    100: '#f9eadc',
                    200: '#f2d5b8',
                    300: '#e8b878',
                    400: '#b38b59',
                    500: '#a47844',
                    600: '#8a6235',
                    700: '#6f4d2a',
                    800: '#543a20',
                    900: '#3a2816',
                },
                cream: {
                    50: '#ffffff',
                    100: '#f8f6f0',
                    200: '#e8e2d4',
                    300: '#d4c8b8',
                    400: '#b5a494',
                    500: '#8a7865',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            borderRadius: {
                'xl': '1.25rem',
                '2xl': '1.5rem',
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'glow': '0 0 20px rgba(75, 125, 73, 0.15)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
                'slide-in-right': 'slideInRight 0.8s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
                'bounce-soft': 'bounceSoft 2s infinite',
                'shimmer': 'shimmer 3s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                bounceSoft: {
                    '0%, 20%, 53%, 80%, 100%': { transform: 'translateY(0)' },
                    '40%, 43%': { transform: 'translateY(-15px)' },
                    '70%': { transform: 'translateY(-5px)' }
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' }
                }
            }
        },
    },
    plugins: [],
}