<template>
  <v-container text-xs-center mt-14 pt-5>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h3>Welcome back freedom fighters.</h3>
      </v-flex>
    </v-layout>

    <!-- error alert -->
    <v-layout v-if="error" row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <form-alert :message="error.message"></form-alert>
      </v-flex>
    </v-layout>

    <!-- signin form -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-container>
            <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent='handleSigninUser'>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    prepend-icon='mdi-account'
                    :rules="usernameRules"
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
                    :rules="passwordRules"
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
                  <v-btn :loading="loading" :disabled="!isFormValid" color='accent' type='submit'>
                    <span slot="loader" class="custom-loader">
                      <v-icon light>mdi-cached</v-icon>
                    </span>
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
      isFormValid: true,
      usernameRules: [
        username => !! username || 'Username is required',
        username => username.length < 10 || 'Username must be less than 10 characters',
      ],
      passwordRules: [
        password => !! password || 'Password is required',
        password => password.length < 7 || 'Password must be less than 7 characters',
      ],
    }
  },
  computed: {
    ...mapGetters(['loading', 'user', 'error'])
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
      if (this.$refs.form.validate()) {
        this.$store.dispatch('signinUser', {
          username: this.username,
          password: this.password,
        })
      }
    }
  }
}
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>