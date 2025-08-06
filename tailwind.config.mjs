/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}', './pages/**/*.{astro,html,js,jsx,ts,tsx}', './pages/index.astro'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50:  '#f4f6f2',
                    100: '#e6eadf',
                    200: '#ccd6bd',
                    300: '#b3c39c',
                    400: '#99af7a',
                    500: '#7f9c59',   // oliva suave
                    600: '#667a47',
                    700: '#4d5c35',
                    800: '#333d23',
                    900: '#1a1f12',
                },
                secondary: {
                    50:  '#f9f6f2',
                    100: '#efe8dc',
                    200: '#d7c9b1',
                    300: '#bba88a',
                    400: '#9f8763',
                    500: '#83663c',   // tono madera
                    600: '#664e30',
                    700: '#4d3b24',
                    800: '#332819',
                    900: '#1a140d',
                },
                accent: {
                    50:  '#fdfbf7',
                    100: '#f6f0e6',
                    200: '#eadac4',
                    300: '#ddc3a1',
                    400: '#d0ac7e',
                    500: '#c3955b',   // piedra claro
                    600: '#9c7749',
                    700: '#755937',
                    800: '#4e3b25',
                    900: '#271d12',
                },
                cream: {
                    50:  '#ffffff',
                    100: '#faf8f5',
                    200: '#f2eee7',
                    300: '#e6ddd0',
                    400: '#d8cbb8',
                    500: '#cabaa1',   // blanco crema
                    600: '#a0957f',
                    700: '#766f5e',
                    800: '#4c4a3e',
                    900: '#22251d',
                },
            },
            fontFamily: {
                serif: ['Libre Caslon Text', 'serif'],
                sans: ['Jost', 'system-ui', 'sans-serif'],
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