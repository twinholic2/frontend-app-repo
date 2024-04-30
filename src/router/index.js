import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UpdateEmployeeView from '../components/UpdateEmployee.vue'
import DetailEmployeeView from '../components/DetailEmployee.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addEmployee',
    name: 'AddEmployee',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: () => import(/* webpackChunkName: "about" */ '../views/AddEmployeeView.vue')
  },
  {
    path: '/updateEmployee',
    name: 'UpdateEmployee',
    component: UpdateEmployeeView
  },
  {
    path: '/detailEmployee',
    name: 'DetailEmployee',
    component: DetailEmployeeView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
