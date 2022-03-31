import Vue from 'vue'
import VueRouter from 'vue-router'

const Home  = () => import('../views/home/Home')
const Category  = () => import('../views/category/Category')
const Profile  = () => import('../views/profile/Profile')
const Cart  = () => import('../views/cart/Cart')
const Detail = () => import ('../views/detail/Detail')

Vue.use(VueRouter)

const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'home',
  },
  {
    path:'/home',
    component: Home,
  },
  {
    path:'/category',
    component: Category,
  },
  {
    path:'/profile',
    component: Profile,
  },
  {
    path:'/cart',
    component: Cart,
  },
  {
    path:'/detail/:iid',
    component: Detail,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
