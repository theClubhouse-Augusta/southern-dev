import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0ae71a68 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _e89077c2 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */))
const _391d7c1e = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages_news_index" */))
const _a7305d88 = () => interopDefault(import('..\\pages\\partners.vue' /* webpackChunkName: "pages_partners" */))
const _0205a93e = () => interopDefault(import('..\\pages\\policies.vue' /* webpackChunkName: "pages_policies" */))
const _320a5db0 = () => interopDefault(import('..\\pages\\schedule.vue' /* webpackChunkName: "pages_schedule" */))
const _1bf9507d = () => interopDefault(import('..\\pages\\speakers\\index.vue' /* webpackChunkName: "pages_speakers_index" */))
const _7c6fb204 = () => interopDefault(import('..\\pages\\news\\_news.vue' /* webpackChunkName: "pages_news__news" */))
const _dd59e336 = () => interopDefault(import('..\\pages\\speakers\\_speaker.vue' /* webpackChunkName: "pages_speakers__speaker" */))
const _1a444d91 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0ae71a68,
    name: "about"
  }, {
    path: "/contact",
    component: _e89077c2,
    name: "contact"
  }, {
    path: "/news",
    component: _391d7c1e,
    name: "news"
  }, {
    path: "/partners",
    component: _a7305d88,
    name: "partners"
  }, {
    path: "/policies",
    component: _0205a93e,
    name: "policies"
  }, {
    path: "/schedule",
    component: _320a5db0,
    name: "schedule"
  }, {
    path: "/speakers",
    component: _1bf9507d,
    name: "speakers"
  }, {
    path: "/news/:news",
    component: _7c6fb204,
    name: "news-news"
  }, {
    path: "/speakers/:speaker",
    component: _dd59e336,
    name: "speakers-speaker"
  }, {
    path: "/",
    component: _1a444d91,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
