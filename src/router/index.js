import { createRouter, createWebHistory } from 'vue-router'
import Plan from '../views/PlanView.vue'
import Home from '../views/HomeView.vue'
import ChartView from '../views/ChartView.vue'
import PlanCreate from '../views/PlanCreate.vue'
import PlanDetail from '../views/PlanDetail.vue'
import DietList from '../views/DietList.vue'
import SportList from '../views/SportList.vue'
import login from '../views/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/plan',
      name: 'plan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Plan,
      children:[
        {path:'chart',component:ChartView,},
        {path:'create',component:PlanCreate,},
        {path:'/plan/:planID/',component:PlanDetail,},
        {path:'diet/:planID/',component:DietList,},
        {path:'sport/:planID/',component:SportList,},
        ],
    },
    {
      path:'/login',
      name: 'login',
      component: login
    }
  ]
})
// {path:'/plan/:planID/',component:PlanDetail,
// children:[
//   {path:'diet/:dietID/',component:DietList,},
//   {path:'sport/:sportID/',component:SportList,},
// ]},             
export default router
