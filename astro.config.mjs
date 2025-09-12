// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  
  integrations: [react(), tailwind()],
  
  build: {
    assets: '_assets'
  },
  
  vite: {
    define: {
      global: 'globalThis',
    },
    resolve: {
      // extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
      // alias: {
      //   '@api': './src/lib/api',
      //   '@components': './src/components',
      //   '@hooks': './src/lib/hooks',
      //   '@utils': './src/lib/utils',
      //   '@styles': './src/styles',
      //   '@images': './src/assets/images',
      //   '@icons': './src/assets/icons',
      //   '@lib': './src/lib',
      //   '@providers': './src/lib/providers',
      // },
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