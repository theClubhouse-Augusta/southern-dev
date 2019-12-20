<<<<<<< HEAD
import colors from 'vuetify/es5/util/colors';
=======
import colors from 'vuetify/es5/util/colors'
>>>>>>> theClubhouse-Augusta/optimize

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
<<<<<<< HEAD
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  generate: {
    routes: function() {
      const fs = require('fs')
      return fs.readdirSync('./assets/content/blog').map(file => {
        return {
          route: `/blog/${file.slice(2, -5)}`,
          payload: require(`./assets/content/blog/${file}`)
        }
      })
    }
  },
=======
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
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    link: [
      { rel: 'icon', href: '/favicon.png' },
      {href: "https://fonts.googleapis.com/css?family=Roboto|Merriweather:400,700"}
    ],
    script: [
      {src: "https://www.googletagmanager.com/gtag/js?id=UA-132392058-1", defer: "true"}
    ]
  },
>>>>>>> theClubhouse-Augusta/optimize
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
<<<<<<< HEAD
=======
  ** Global CSS
  */
  css: [
    '~/css/base.css'
  ],
  /*
>>>>>>> theClubhouse-Augusta/optimize
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
<<<<<<< HEAD
    '@nuxtjs/markdownit',
=======
>>>>>>> theClubhouse-Augusta/optimize
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
<<<<<<< HEAD
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
=======
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
    }]
>>>>>>> theClubhouse-Augusta/optimize
    // '@nuxtjs/style-resources'
  ],
  /*
   ** Load global SASS styles  
<<<<<<< HEAD
  */ 
  // styleResources: {
  //   sass: [
  //     './assets/**/*.sass'
  //   ]
  // },
  css: [
    '@/assets/main.sass'
=======
  */
  // styleResources: {
  //   sass: [
  // './assets/**/*.sass'
  //   ]
  // },
  css: [
    // '@/assets/main.sass'
>>>>>>> theClubhouse-Augusta/optimize
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
<<<<<<< HEAD
    customVariables: ['~/assets/variables.scss'],
=======
    customVariables: ['~/assets/variables.sass'],
>>>>>>> theClubhouse-Augusta/optimize
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
<<<<<<< HEAD
  markdownit: {
    injected: true,
  },
  // generate: {
  //   routes: function() {
  //     const fs = require('fs');
  //     return fs.readdirSync('./assets/content/blog').map(file => {
  //       return {
  //         route: `/blog/${file.slice(2, -5)}`,
  //         payload: require(`./assets/content/blog/${file}`),
  //       };
  //     });
  //   },
  // },
=======
>>>>>>> theClubhouse-Augusta/optimize
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
<<<<<<< HEAD
    extend (config, ctx) {
    }
  }
};
=======
    extend(config, ctx) {
    }
  }
}
>>>>>>> theClubhouse-Augusta/optimize
