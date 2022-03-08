import "vuetify/dist/vuetify.min.css";
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import Vue from 'vue'
import vuetify from './plugins/vuetify/vuetify.js'
import router from './router'
import App from './App.vue'
import store from './store'
import FormAlert from './components/Shared/FormAlert'

// register global component to use anywhere
Vue.component('form-alert', FormAlert)

Vue.use(VueApollo)

export const defaultClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: 'include'
  },
  request: operation => {
    if (!localStorage.token) {
      localStorage.setItem('token', '')
    }
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: localStorage.getItem('token')
      }
    }))
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (networkError) {
      console.log('[networkError]', networkError)
    }
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        console.dir(err)
      }
    }
  },
})

const apolloProvider = new VueApollo({ defaultClient })

Vue.config.productionTip = false

new Vue({
    apolloProvider,
    router,
    store,
    vuetify,
    render: h => h(App),
    created() {
      this.$store.dispatch('getCurrentUser')
    }
}).$mount('#app')