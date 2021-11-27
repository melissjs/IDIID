import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
 
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./components/Home.vue')
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('./components/Auth/Signin.vue'),
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('./components/Auth/Signup.vue'),
    },
    {
      path: '/posts',
      name: 'Posts',
      component: () => import('./components/Posts/Posts.vue'),
    },
    {
      path: '/post/add',
      name: 'AddPost',
      component: () => import('./components/Posts/AddPost.vue'),
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('./components/Auth/Profile.vue'),
    }
  ]
})
