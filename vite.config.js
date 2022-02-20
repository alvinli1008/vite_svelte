import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import sveltePreprocess from 'svelte-preprocess';
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  return {
    base: '/vite_svelte',
    build: {
      outDir: 'docs'
      // minify: false
    },
    plugins: [
      svelte({
        preprocess: sveltePreprocess()
      }),
      copy({
        targets: [
          {
            src: [path.resolve('./node_modules/@builder.io/partytown/lib/**/*')],
            dest: path.join('./', 'public', '~partytown')
          }
        ],
        hook: 'writeBundle' // defaults to 'buildEnd'
      })
    ]
    // resolve: {
    //   alias: {
    //     '~': path.resolve(__dirname, 'src')
    //   }
    // }
  };
});
