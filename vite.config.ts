import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'delta-ui-2.0',
      formats: ['es', 'cjs', 'umd'],
      fileName: 'delta-ui-2.0',
    },
    rollupOptions: {
      external: ['react', 'react dom'],
    },
  },
  plugins: [react(), dts()],
  resolve: {
    alias: {
      '@styles': '/src/styles',
    },
  },
});
