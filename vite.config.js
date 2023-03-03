// This is the config file used to compile the module that will be published to NPM.
const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(
                __dirname,
                'lib/vite-module-w-ghpages-demo-explore.ts'
            ),
            name: 'vite-module-builder-w-ghpages-npm-template',
            fileName: (format) =>
                `vite-module-builder-w-ghpages-npm-template.${format}.js`,
        },
        minify: false,
    },
})
