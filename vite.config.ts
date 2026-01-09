import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/', // correct for username.github.io
  plugins: [react()],
    server: {
    cors: {
      // the origin you will be accessing via browser
      origin: 'https://hnyrxs2.github.io',
    },
  },
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: {
        main: resolve(__dirname, 'index.html')
      }
    },
  },
});