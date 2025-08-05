/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9f0',
                    100: '#dcf2dc',
                    200: '#bce5bc',
                    300: '#8dd18d',
                    400: '#7fa378',
                    500: '#4b7d49',
                    600: '#355e35',
                    700: '#2d4a2d',
                    800: '#263b26',
                    900: '#203020',
                },
                secondary: {
                    50: '#faf7f2',
                    100: '#f2ede3',
                    200: '#e3d8c5',
                    300: '#d1bfa2',
                    400: '#b38b59',
                    500: '#8b5e3c',
                    600: '#7a4f32',
                    700: '#66412a',
                    800: '#563627',
                    900: '#4a2f24',
                },
                accent: {
                    50: '#fdf8f3',
                    100: '#f9ede1',
                    200: '#f1d8c2',
                    300: '#e7be97',
                    400: '#b38b59',
                    500: '#a47844',
                    600: '#8b5e3c',
                    700: '#734d32',
                    800: '#5e402a',
                    900: '#4d3525',
                },
                cream: {
                    50: '#ffffff',
                    100: '#f8f6f0',
                    200: '#e8e2d4',
                    300: '#d4c8b8',
                    400: '#b5a494',
                    500: '#8a7865',
                    600: '#6f5f50',
                    700: '#4d3f33',
                    800: '#2e1f15',
                    900: '#1a0f0a',
                },
                dark: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                }
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
                'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'portrait-float': 'portraitFloat 4s ease-in-out infinite',
                'wave': 'wave 2s ease-in-out infinite',
                'shimmer': 'shimmer 3s ease-in-out infinite',
                'bounce-custom': 'bounce-custom 2s infinite',
                'scroll-wheel': 'scroll 2s infinite',
                'fade-in-up': 'fadeInUp 0.8s ease forwards',
                'slide-in-down': 'slideInDown 0.8s ease-out',
                'slide-in-left': 'slideInLeft 1s ease-out',
                'slide-in-up': 'slideInUp 1s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                portraitFloat: {
                    '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
                    '50%': { transform: 'translate(-50%, -52%) scale(1.02)' },
                },
                wave: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '25%': { transform: 'rotate(20deg)' },
                    '75%': { transform: 'rotate(-10deg)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                'bounce-custom': {
                    '0%, 20%, 53%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },
                    '40%, 43%': { transform: 'translateX(-50%) translateY(-15px)' },
                    '70%': { transform: 'translateX(-50%) translateY(-5px)' },
                },
                scroll: {
                    '0%': { opacity: '0', transform: 'translateX(-50%) translateY(0)' },
                    '10%, 90%': { opacity: '1' },
                    '100%': { opacity: '0', transform: 'translateX(-50%) translateY(16px)' },
                },
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(50px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                slideInDown: {
                    from: { opacity: '0', transform: 'translateY(-30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    from: { opacity: '0', transform: 'translateX(-30px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
                slideInUp: {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'soft-lg': '0 10px 40px rgba(0, 0, 0, 0.1)',
                'soft-xl': '0 20px 60px rgba(0, 0, 0, 0.12)',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

