import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        fs: {
            strict: false
        }
    },
    // SPA fallback - serves index.html for all non-file routes
    appType: 'spa'
})
