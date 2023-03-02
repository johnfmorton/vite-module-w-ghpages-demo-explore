# vite-module-w-ghpages-demo
This is a repo to test a Vite workflow that allows you to create a demo page for your module and publish it to GitHub Pages. It also allows you to publish your module to NPM.



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
- [ ] Work on the documentation
- [ ] Create a video walkthru
