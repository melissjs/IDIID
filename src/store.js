import Vuex from 'vuex'
import Vue from 'vue'
import { defaultClient as apolloClient } from './main'
import router from './router'
import {
  GET_CURRENT_USER,
  SIGNOUT_USER,
  SIGNIN_USER,
  SIGNUP_USER,
  GET_POSTS,
} from './queries'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    user: null,
    loading: false,
    error: null,
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload
    },
    setUser: (state, payload) => {
      state.user = payload
    },
    setLoading: (state, payload) => {
      state.loading = payload
    },
    clearUser: state => (state.user = null),
    clearError: state => (state.error = null),
    setError: (state, payload) => {
      state.error = payload
    },
  },
  actions: {
    getCurrentUser: ({ commit }) => {
      commit('setLoading', true)
      apolloClient.query({
        query: GET_CURRENT_USER
      })
      .then(({ data }) => {
        commit('setLoading', false)
        commit('setUser', data.getCurrentUser)
      })
      .catch(err => {
        commit('setLoading', false)
      })
    },
    getPosts: ({ commit }) => {
      commit('setLoading', true)
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          // commit passes data to mutation fn
          commit('setPosts', data.getPosts)
          commit('setLoading', false)
        })
        .catch(err => {
          commit('setLoading', false)
          console.log('ERROR', err)
        })
    },
    signinUser: ({ commit }, payload) => {
      commit('clearError')
      commit('setLoading', true)
      localStorage.setItem('token', '')
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit('setLoading', false)
          localStorage.setItem('token', data.signinUser.token)
          router.go()
        })
        .catch(err => {
          commit('setLoading', false)
          commit('setError', err)
          console.error(err)
        })
    },
    signoutUser: async ({ commit }) => {
      commit('clearUser')
      localStorage.setItem('token', '')
      await apolloClient.resetStore()
      router.push('/')
    }
  },
  getters: {
    loading: state => state.loading,
    posts: state => state.posts,
    user: state => state.user,
    error: state => state.error,
  }
})