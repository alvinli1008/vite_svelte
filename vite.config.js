import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// import path from 'path';
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode })=> {
  return {
    base: '/',
    build: {
      outDir: 'docs',
      minify: false
    },
    plugins: [
      svelte({
        preprocess: sveltePreprocess()
      })
  ],
    // resolve: {
    //   alias: {
    //     '~': path.resolve(__dirname, 'src')
    //   }
    // }
  }
})
