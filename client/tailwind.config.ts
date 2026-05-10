import type { Config } from 'tailwindcss'
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                cream: '#F5F0E8',
                forest: {
                    DEFAULT: '#1B4332',
                    light: '#2D6A4F',
                    dark: '#0A2A1F'
                },
                terra: '#C25B3F',
                sand: '#E8DFD0',
                bark: '#6B5744',
                offwhite: '#FAFAF7'
            },
            fontFamily: {
                display: ['Cormorant Garamond', 'serif'],
                body: ['DM Sans', 'sans-serif']
            },
            container: { center: true }
        }
    },
    plugins: []
} as Config
