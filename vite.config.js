import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['jquery', 'owl.carousel'],
      output: {
        globals: {
          jquery: 'jQuery',
          'owl.carousel': 'OwlCarousel'
        }
      }
    }
  }
})
