<template>
  <v-app>
    <!-- side navbar -->
    <v-navigation-drawer app temporary fixed v-model='menuSide'>
      <v-toolbar dark>
        <router-link to='/' custom v-slot="{ navigate }" style='cursor: pointer'> 
          <span @click="navigate" @keypress.enter="navigate" role="link">
            INTERFACE<span class='font-weight-bold'>DISTRICT</span>
          </span>
        </router-link>
        <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon @click='toggleMenuSide'>mdi-close</v-icon>
          </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for='item in menuSideItems' :key='item.title' :to='item.link'>
          <v-list-item-action>
            <v-icon left>
              {{item.icon}}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            {{item.title}}
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="user" @click="handleSignoutUser">
          <v-list-item-action>
            <v-icon left>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
          Signout
        </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- horizontal navbar -->
    <v-app-bar fixed color='secondary' dark>
      <v-app-bar-nav-icon @click='toggleMenuSide'></v-app-bar-nav-icon>
      <v-toolbar-title class='hidden-xs-only'>
        <router-link to='/' custom v-slot="{ navigate }" style='cursor: pointer'> 
          <span @click="navigate" @keypress.enter="navigate" role="link">
            INTERFACE<span class='font-weight-bold'>DISTRICT</span>
          </span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- search input -->
      <v-text-field
        flex
        prepend-icon='mdi-magnify'
        placeholder='Seach Posts'
        color='accent'
        hide-details
        single-line>
      </v-text-field>
      <!-- items -->
      <v-spacer></v-spacer>
      <v-toolbar-items class='hidden-xs-only'>
        <v-btn text v-for="item in menuMain" :key="item.title" :to="item.link">
          <v-icon left class='hidden-sm-only'>
            {{item.icon}}
          </v-icon>
          {{item.title}}
        </v-btn>
        <v-btn text to="/profile" v-if="user">
          <v-icon class="hidden-sm-only" left>mdi-account</v-icon>
          <v-badge right color="blue darken-2">
            <span slot="badge">1</span>
            Profile
          </v-badge>
        </v-btn>
        <v-btn text v-if="user" @click="handleSignoutUser">
          <v-icon class="hidden-sm-only" left>mdi-logout</v-icon>
          Signout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- main -->
    <main>
      <v-container class='mt-14'>
        <transition name='fade'>
          <router-view />
        </transition>
        <v-snackbar v-model="authSnackbar" color="success" :timeout='5000' bottom right>
          <v-icon class="mr-3">mdi-check-circle</v-icon>
          <span>You are now signed in!</span>
          <v-btn right absolute dark text @click="authSnackbar = false">
            <v-icon class="mr-3">mdi-close</v-icon>
          </v-btn>
        </v-snackbar>
        <v-snackbar v-if="authError" v-model="authErrorSnackbar" color="info" :timeout='5000' bottom right>
          <v-icon class="mr-3">mdi-cancel</v-icon>
          <span>{{authError.message}}</span>
          <v-btn right absolute dark text to="/signin">Signin</v-btn>
        </v-snackbar>
      </v-container>
    </main>

  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'app',
    data() {
      return {
        menuSide: false,
        authSnackbar: false,
        authErrorSnackbar: false,
      }
    },
    watch: {
      user(newValue, oldValue) {
        if (oldValue === null) {
          this.authSnackbar = true
        }
      },
      authError(value) {
        if (value !== null) {
          this.authErrorSnackbar = true
        }
      },
    },
    computed: {
      ...mapGetters(['user', 'authError']),
      menuMain() {
        let items = [
          { icon: 'mdi-card-multiple', title: 'Posts', link: '/posts'},
          { icon: 'mdi-account-lock-open', title: 'Sign in', link: '/signin'},
          { icon: 'mdi-account-edit', title: 'Sign Up', link: '/signup'}
        ]
        if (this.user) {
          items = [
            { icon: 'mdi-card-multiple', title: 'Posts', link: '/posts'},
            // { icon: 'mdi-stars', title: 'Create Post', link: '/post/add'},
            // { icon: 'mdi-account', title: 'Profile', link: '/profile'}
          ]
        }
        return items
      },
      menuSideItems() {
        let items = [
          { icon: 'mdi-card-multiple', title: 'Posts', link: '/posts'},
          { icon: 'mdi-account-lock-open', title: 'Sign in', link: '/signin'},
          { icon: 'mdi-account-edit', title: 'Sign Up', link: '/signup'}
        ]
        if (this.user) {
          items = [
            { icon: 'mdi-card-multiple', title: 'Posts', link: '/posts'},
            { icon: 'mdi-stars', title: 'Create Post', link: '/post/add'},
            { icon: 'mdi-account', title: 'Profile', link: '/profile'}
          ]
        }
        return items
      }
    },
    methods: {
      handleSignoutUser() {
        this.$store.dispatch('signoutUser')
      },
      toggleMenuSide() {
        this.menuSide = !this.menuSide
      }
    }
  }
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: all;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(-25px);
}
</style>