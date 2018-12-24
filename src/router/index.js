import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const root = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('../page/Index'),
  },
  {
    path: '*',
    name: 'Error',
    redirect: "/"
  }
]
const routes = [...root]

const router = {
  routes: routes,
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0,y:0}
    }
  },
}
export default new Router(router)
