import Vue from 'vue'
import Router from 'vue-router'
import newsContainer from './views/news.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: newsContainer
    },
    {
      path: '/add-news',
      name: 'add-news',
      component: () => import(/* webpackChunkName: "about" */ './views/AddNews.vue')
    },
    {
      path: '/*',
      name: 'not-found',
      component: () => import(/* webpackChunkName: "about" */ './views/NotFound.vue')
    }
  ]
})