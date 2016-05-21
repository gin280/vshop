module.exports = function (router) {
  router.map({
    '/': {
      name: 'index',
      component: require('./App.vue')
    },
    '/home': {
      name: 'home',
      component: function (reslove) {
        return require(['./views/home/index.vue'], reslove)
      }
    },
    '*': {
      name: '404error',
      component: require('./views/404.vue')
    },
    'register': {
      name: 'register',
      component: require('./views/register.vue')
    },
    'login': {
      name: 'login',
      component: require('./views/login.vue')
    },
    '/cart': {
      name: 'cart',
      component: function (reslove) {
        return require(['./views/cart/index.vue'], reslove)
      }
    }
  })

  router.redirect({
    '/': '/home'
  })

  router.beforeEach(function (transition) {
    transition.next()
  })

  router.afterEach(function (transition) {
    console.log('成功浏览到：' + transition.to.path)
  })
}

