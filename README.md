# southern-dev

> nuxt version of southern dev

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

Find information [here](https://yarnpkg.com/lang/en/docs/install) about yarn and installing it on your local machine.

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

This project integrates the Netfliy CMS to manage speaker information, and blog/news posts.
You can navigate to the admin part of the application at <home address>/admin. Locally you will be prompted to use a netlify address that will be used for user validation. User access is controlled via the [Netlify Identity interface](https://docs.netlify.com/visitor-access/identity/) on the Netlify site. 
Once in the admin section, you can enter new records which will be saved as json files in this repository.
More information about Netlify CMS can be found [here](https://www.netlifycms.org/docs/intro/) and implementation with Nuxt can be found [here](https://www.netlifycms.org/docs/nuxt/).
