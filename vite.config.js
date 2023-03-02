const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'vite-module-w-ghpages-demo-explore',
      fileName: (format) => `vite-module-w-ghpages-demo-explore.${format}.js`
    },
    minify: false
  }
});
