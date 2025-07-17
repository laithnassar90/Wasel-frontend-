import { NodeGlobalsPolyfillPlugin, NodeModulesPolyfillPlugin } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      stream: 'stream-browserify',
      buffer: 'buffer',
      crypto: 'crypto-browserify',
      util: 'util',
      path: 'path-browserify',
      url: 'url',
      querystring: 'querystring-es3'
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true
        }),
        NodeModulesPolyfillPlugin()
      ]
    }
  },
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist'
  }
});