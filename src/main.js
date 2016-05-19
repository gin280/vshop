import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

Vue.use(VueRouter)
Vue.use(VueResource)

// const configPath = '/static/mock/'
// window.configPath = configPath
Vue.http.options.root = '/static/mock'

// Vue.http.options.headers = {
//   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
// }
Vue.http.options.emulateJSON = true
Vue.config.debug = true

const router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true,
  linkActiveClass: 'nav-active'})

require('./routers')(router)

router.start(App, 'app')

