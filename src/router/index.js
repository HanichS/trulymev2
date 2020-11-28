import firebase from 'firebase'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '@/views/Products.vue'
import CreateProduct from '@/views/CreateProduct'
import FashionAnalysis from '@/views/FashionAnalysis'
import Login from '@/views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products
  },
  {
    path: '/cadastrar-produto',
    name: 'Cadastrar Produto',
    component: CreateProduct,
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: '/analisar-estilo',
    name: 'Analisar Estilo',
    component: FashionAnalysis,
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser)
    router.push({
      path: '/Login',
      params: {
        navigateOnSuccess: to.path
      }
    })
  else if (!requiresAuth && currentUser) 
    next('Timeline');
  else 
    next();  
});

export default router
