# vite-module-w-ghpages-demo
This is a repo to test a Vite workflow that allows you to create a demo page for your module and publish it to GitHub Pages. It also allows you to publish your module to NPM.

## What's in this repo

The most important file in this repo is the `lib/main.ts` file. This is where you create the module you are working on. For this demo, it is a simple function that looks for an HTML element with the id of "messageOutput" and then sets the text of that element to the message you pass in. It serves as a starting point for you to build your module. Ultimately, you will use Vite to create a Command JS module and a ESM module. See the `package.json` file for references to both of these.

The other imporatnt page is the `index.html` file. This is the demo page for your module. It includes the `demo-page-assets/demo.ts` file which is where you will write the code to test your module. This page is using Vite for development and the build process.

You can see the demo page for this repo at:

https://johnfmorton.github.io/vite-module-w-ghpages-demo-explore/

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
