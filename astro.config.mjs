// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // output: 'static', // デフォルト（SSG）
  // adapter: cloudflare(),
  
  integrations: [react(), tailwind()],
  
  build: {
    assets: '_assets'
  },
  
  vite: {
    define: {
      global: 'globalThis',
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    }
  }
});