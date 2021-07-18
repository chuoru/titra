import Vue from 'vue'
import Router from 'vue-router'
import UserMainPage from '../views/UserMainPage/UserMainPage.vue'
// import AdminMainPage from '../views/AdminMainPage/AdminMainPage.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: UserMainPage
      // component: AdminMainPage
    }
  ]
})
