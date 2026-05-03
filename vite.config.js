import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true,
      gzipSize: true
    })
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes('node_modules')) {

  //           // 🔹 React core only
  //           if (id.includes('node_modules/react/')) {
  //             return 'react-core';
  //           }

  //           // 🔹 React DOM
  //           if (id.includes('react-dom')) {
  //             return 'react-dom';
  //           }

  //           // 🔹 Router
  //           if (id.includes('react-router')) {
  //             return 'router';
  //           }

  //           // 🔹 Ant Design
  //           if (id.includes('antd')) {
  //             return 'antd';
  //           }

  //           // 🔹 MUI
  //           if (id.includes('@mui')) {
  //             return 'mui';
  //           }

  //           return 'vendor';
  //         }
  //       }
  //     }
  //   }
  // }
  // vite.config.js

  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes('node_modules')) {
  //           if (id.includes('react')) return 'react-core';
  //           if (id.includes('react-dom')) return 'react-dom';
  //           if (id.includes('antd')) return 'antd';
  //           if (id.includes('@mui')) return 'mui';
  //           return 'vendor';
  //         }
  //       },
  //     },
  //   },
  // },

  // vite.config.js
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (!id.includes('node_modules')) return;

  //         if (id.includes('/react/')) return 'react-core';
  //         if (id.includes('/react-dom/')) return 'react-dom';
  //         if (id.includes('react-router')) return 'router';

  //         return 'vendor';
  //       },
  //     },
  //   },
  // },


})
