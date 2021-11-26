import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import "vuetify/dist/vuetify.min.css";
import vuetify from './plugins/vuetify/vuetify.js'

Vue.use(VueRouter)

Vue.config.productionTip = false
 
const router = new VueRouter({
  routes: [
    { path: '/', component: () => import('./components/Body.vue') },
    // { path: '/login', component: Login },
    // { path: '/about', component: About }
  ]
})

new Vue({
    router,
    vuetify,
    render: h => h(App),
}).$mount('#app')