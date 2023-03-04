# vite-module-builder-w-ghpages-npm-template
This is a repo serves as a template workflow that uses Vite to help you create a module, exported as a Common JS module and an ES module. It also includes a demo page that allows you to text your module during development and then publish your demo page to GitHub Pages when push your commit to GitHub. It also allows you to publish your module to NPM every time you push a commit to GitHub with an new version number in your package.json file.

## What's in this repo

The most important file in this repo is the `lib/vite-module-builder-w-ghpages-npm-template.ts` file.

The name of the file is important. It is the name of the module you are creating. You will need to update the name of the file and the name of the module in the file.

* index.html - The demo page for your module. Use it to test your module. It will also serve as the demo page for your module when you publish it to GitHub Pages.
* package.json - The package.json file for your module. You will need to update the name of the module in the file.
* README.md - The README.md file for your module. You will need to update the name of the module in the file plus create documentation for your module.
* vite.config.ts - The Vite configuration file for your module build process.
* vite.demo.config.js - The Vite configuration file for your demo page build process for GitHub Pages.
* lib/vite-module-builder-w-ghpages-npm-template.ts - The demo page imports this file to test your module. You will need to update the name of the module in the file.

For a working example, check out this repo: https://github.com/johnfmorton/progressive-share-button

You will see how I use "progressive-share-button" as the name of the module and the name of the file. I also use it in the `package.json` file.

`lib/vite-module-builder-w-ghpages-npm-template.ts` is where you create the module you are working on. For this demo, it is a simple function that looks for an HTML element with the id of "messageOutput" and then sets the text of that element to the message you pass in. The file serves as a starting point for you to build your module. Ultimately, you will use Vite to create a Command JS module and a ESM module. See the `package.json` file for references to both of these.

The other imporatnt page is the `index.html` file. This is the demo page for your module. It includes the `demo-page-assets/demo.ts` file which is where you will write the code to test your module. This page is using Vite for development and the build process.

You can see the demo page for this repo at:

https://johnfmorton.github.io/vite-module-builder-w-ghpages-npm-template/

## How to use

### GitHub Pages

The `.github/workflows/ghpages.yml` file is the workflow that will get your demo page published as the repo's demo page. You must set this up in your repo for it to work. You can do this by going to the repo's settings, then to the "Pages" section. Click the "Source" dropdown and select "GitHub Actions" as shown below.

![GitHub Pages settings](./docs/gh-pages-settings.png)
### NPM publishing

In your GitHub repo, you will need a key from your NPM repository that will allow you to publish. This will be stored in your GitHub secrets for the repo. In the `.github/workflows/build.yml` file, you will need a reference to it, `secrets.NPM_TOKEN`. If you choose a different name for your secret, you will need to update the workflow file.

![NPM Access Tokens](./docs/npm-access-tokens.png)

In the repo's settings, you will need to add the secret to the repo. You can do this by going to the repo's settings, then to the "Secrets and variables" section and then select the "Actions" section. Click the "New repository secret" button and add the secret as shown below.

![GitHub Secrets](./docs/gh-secrets.png)

## To do

- [ ] Make this a template repo
- [ ] Work on the documentation on how to update the name of your project and more
- [ ] Create a video walkthru
