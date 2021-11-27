import Vue from 'vue'
import App from './App.vue'
import "vuetify/dist/vuetify.min.css";
import vuetify from './plugins/vuetify/vuetify.js'
import router from './router'

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: h => h(App),
}).$mount('#app')