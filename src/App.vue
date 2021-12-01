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
      </v-toolbar-items>
    </v-app-bar>

    <!-- main -->
    <main>
      <v-container class='mt-14'>
        <transition name='fade'>
          <router-view />
        </transition>
      </v-container>
    </main>

  </v-app>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        menuSide: false,
      }
    },
    computed: {
      menuMain() {
        return [
          { icon: 'mdi-card-multiple', title: 'Posts', link: '/posts'},
          { icon: 'mdi-account-lock-open', title: 'Sign in', link: '/signin'},
          { icon: 'mdi-account-edit', title: 'Sign Up', link: '/signup'}
        ]
      },
      menuSideItems() {
        return [
          { icon: 'mdi-card-multiple', title: 'Posts', link: '/posts'},
          { icon: 'mdi-account-lock-open', title: 'Sign in', link: '/signin'},
          { icon: 'mdi-account-edit', title: 'Sign Up', link: '/signup'}
        ]
      }
    },
    methods: {
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