import Vue from 'vue'
import Router from 'vue-router'
// import EmployeeMainPage from "../views/EmployeeMainPage.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-page',
      // component: require('@/views/AdminMainPage').default
      component: require('@/views/TimeTrackingScreen').default
    },
    // {
    //   path: '*',
    //   redirect: '/'
    // },
    {
      path: '/worklog',
      component: require('@/views/PrivateWorkLogScreen').default
    }
  ]
})
