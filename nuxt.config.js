import colors from 'vuetify/es5/util/colors';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  generate: {
    routes: function() {
      const fs = require('fs');
      let posts = fs.readdirSync('./assets/content/blog').map(file => {
        console.log(file.slice(0, -5));
        console.log(file);
        return {
          route: `/blog/${file.slice(2, -5)}`,
          payload: require(`./assets/content/blog/${file}`)
        };
      });
      let speakers = fs.readdirSync('./assets/content/speakers').map(file => {
        console.log(file.slice(0, -5));
        console.log(file);
        return {
          route: `/speakers/${file.slice(0, -5)}`,
          payload: require(`./assets/content/speakers/${file}`)
        };
      });
      return Promise.all([posts, speakers]).then(values => {
        return [...values[0], ...values[1]];
      });
    }
  },
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { httpEquiv: 'X-UA-Compatible', content: "IE=edge" },

      // Open Graph
      { property: "og:title", content: "Southern Dev Conference" },
      { property: "og:site_name", content: "southerndev" },
      { property: "og:url", content: "southerndev.co" },
      { property: "og:description", content: "A developer conference in Augusta Georgia. We want to push forward the conversation around software engineering beyond the basics." },
      {property: "og:type", content: "website"},
      {property: "og:image", content: "/logo.png"},

      // Twitter
      {name: "twitter:card", content: "summary_large_image"},
      {name: "twitter:site", content: "@sodevcon"},
      {name: "twitter:title", content: "Southern Dev Conference"},
      {name: "twitter:image", content: "/logo.png"},
      
      // Google
      {name: "google-site-verification", content: "6kUjhvEiJXYvAHEbR88rpfXohyc23GlOoXzcgnWAqcU"},

      // General
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' },
      {href: "https://fonts.googleapis.com/css?family=Roboto|Merriweather:400,700"}
    ],
    script: [
      {src: "https://www.googletagmanager.com/gtag/js?id=UA-132392058-1", defer: "true"}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/markdownit',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
      ['nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['far']
          }
        ]
      },
    ],
    '@nuxtjs/markdownit',
    // '@nuxtjs/style-resources'
  ],
  /*
   ** Load global SASS styles  
  */ 
  // styleResources: {
  //   sass: [
  //     './assets/**/*.sass'
  //   ]
  // },
  css: [
    '@/assets/main.sass'
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.sass'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  markdownit: {
    injected: true,
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
};
