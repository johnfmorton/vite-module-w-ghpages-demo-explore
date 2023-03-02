const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'vite-module-builder-w-ghpages-npm-template',
      fileName: (format) => `vite-module-builder-w-ghpages-npm-template.${format}.js`
    },
    minify: false
  }
});
