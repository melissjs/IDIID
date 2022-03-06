<template>
  <v-container text-xs-center mt-14 pt-5>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h3>Welcome back freedom fighters.</h3>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-container>
            <v-form @submit.prevent='handleSigninUser'>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    prepend-icon='mdi-account'
                    v-model='username'
                    label='Username'
                    type='text'
                    required
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    prepend-icon='mdi-lock'
                    v-model='password'
                    label='Password'
                    type='password'
                    required
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-btn color='accent' type='submit'>
                    Signin
                  </v-btn>
                  <h5>
                    Need an account?
                    <router-link to='/signup'>
                      Signup
                    </router-link>
                  </h5>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Signin',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  watch: {
    user(value) {
      if (value) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    handleSigninUser() {
      this.$store.dispatch('signinUser', {
        username: this.username,
        password: this.password,
      })
    }
  }
}
</script>
