import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1f747aac = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _16bd53ff = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */))
const _b5cfc804 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages_news_index" */))
const _fbd78548 = () => interopDefault(import('..\\pages\\partners.vue' /* webpackChunkName: "pages_partners" */))
const _56acd0fe = () => interopDefault(import('..\\pages\\policies.vue' /* webpackChunkName: "pages_policies" */))
const _86b18570 = () => interopDefault(import('..\\pages\\schedule.vue' /* webpackChunkName: "pages_schedule" */))
const _703dff46 = () => interopDefault(import('..\\pages\\speakers\\index.vue' /* webpackChunkName: "pages_speakers_index" */))
const _2dc2c6de = () => interopDefault(import('..\\pages\\news\\_news.vue' /* webpackChunkName: "pages_news__news" */))
const _57fed285 = () => interopDefault(import('..\\pages\\speakers\\_speaker.vue' /* webpackChunkName: "pages_speakers__speaker" */))
const _3f2c5571 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _1f747aac,
    name: "about"
  }, {
    path: "/contact",
    component: _16bd53ff,
    name: "contact"
  }, {
    path: "/news",
    component: _b5cfc804,
    name: "news"
  }, {
    path: "/partners",
    component: _fbd78548,
    name: "partners"
  }, {
    path: "/policies",
    component: _56acd0fe,
    name: "policies"
  }, {
    path: "/schedule",
    component: _86b18570,
    name: "schedule"
  }, {
    path: "/speakers",
    component: _703dff46,
    name: "speakers"
  }, {
    path: "/news/:news",
    component: _2dc2c6de,
    name: "news-news"
  }, {
    path: "/speakers/:speaker",
    component: _57fed285,
    name: "speakers-speaker"
  }, {
    path: "/",
    component: _3f2c5571,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
