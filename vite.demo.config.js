// import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: 'https://johnfmorton.github.io/vite-module-builder-w-ghpages-npm-template/', /// Set this to './' if your site is deployed at https://<USERNAME>.github.io/<REPO>/.
    build: {
        outDir: 'demo',
        minify: false,
    },
})
