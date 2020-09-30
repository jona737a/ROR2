import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import AddItem from '../views/AddItem.vue'
import Login from '../views/LoginPage.vue'


Vue.use(VueRouter)
/*eslint-disable*/

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/AddItem',
    name: 'AddItem',
    component: AddItem,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    redirect: '/'
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

//Login authentication
import { auth } from 'firebase'

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/Login')
  } else {
    next()
  }
})
/*
import firebase from 'firebase'
import 'firebase/firestore'

router.beforeEach((to, from, next) =>{
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.mached.some(record => record.meta.requiresAuth);
  
  if (requiresAuth && !currentUser) next('Login');
  else next();
})
*/