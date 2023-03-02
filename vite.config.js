// import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: 'https://johnfmorton.github.io/vite-module-w-ghpages-demo-explore/', /// Set this to './' if your site is deployed at https://<USERNAME>.github.io/<REPO>/.
  build: {
    outDir: 'demo',
    // lib: {
    //   entry: path.resolve(__dirname, 'lib/main.ts'),
    //   name: 'progressive-share-button',
    //   fileName: (format) => `progressive-share-button.${format}.js`
    // },
    minify: false
  }
})

// module.exports = defineConfig({
//   build: {
//     lib: {
//       entry: path.resolve(__dirname, 'lib/main.ts'),
//       name: 'progressive-share-button',
//       fileName: (format) => `progressive-share-button.${format}.js`
//     },
//     minify: false
//   }
// });
