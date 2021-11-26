<template>
  <v-app>
    <!-- side navbar -->
    <v-navigation-drawer app temporary fixed v-model='menuSide'>
      <!-- <v-toolbar fixed color='accent' dark flat>
        <v-app-bar-nav-icon @click='toggleMenuSide' class='float-right'></v-app-bar-nav-icon>
        <router-link to='/' custom v-slot="{ isActive }" style='cursor: pointer'> 
          <span @click="isActive" @keypress.enter="isActive" role="button">
            title
          </span>
        </router-link>
      </v-toolbar> -->
      <v-toolbar dark>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon @click='toggleMenuSide'>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
    </v-navigation-drawer>

    <!-- horizontal navbar -->
    <v-toolbar fixed color='secondary' dark>
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
    </v-toolbar>

    <!-- main -->
    <main>
      <v-container class='mt-4'>
        <!-- <router-view>

        </router-view> -->
      </v-container>
    </main>

    <!-- was here before -->
    <!-- <div id='app'>
      <Header :fillSearchResults="fillSearchResults" />
      <Body :searchResults="searchResults" />
      <Footer />
    </div> -->
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 8px;
  color: #2c3e50;
}
</style>