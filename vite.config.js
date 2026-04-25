import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'   // ✅ THIS LINE WAS MISSING
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), visualizer({ open: true })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          reactVendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
        },
      },
    },
  },
})

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes('node_modules')) {
//             if (id.includes('react')) return 'reactVendor';
//             if (id.includes('react-router')) return 'router';
//             if (id.includes('@mui')) return 'mui';
//             return 'vendor';
//           }
//         },
//       },
//     },
//   },
// });

// todo : add visualizer plugin to analyze bundle size and optimize it by code splitting and lazy loading.
// plugins: [
//   visualizer({
//     open: true,
//     gzipSize: true,
//   }),
// ]