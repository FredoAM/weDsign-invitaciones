import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import $ from 'jquery';


export default defineConfig({
  plugins: [
    react(),
    {
      name: 'jquery',
      setup() {
        
        window.$ = $;
      },
    },
  ],
});
