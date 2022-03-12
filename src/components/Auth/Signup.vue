<template>
   <v-container text-xs-center mt-14 pt-5>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h3>Welcome, freedom fighter.</h3>
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
            <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent='handleSignupUser'>
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
                    prepend-icon='mdi-account'
                    :rules="emailRules"
                    v-model='email'
                    label='Email'
                    type='email'
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
                  <v-text-field
                    prepend-icon='mdi-gavel'
                    :rules="passwordRules"
                    v-model='passwordConfirmation'
                    label='Confirm Password'
                    type='password'
                    required
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-btn :loading="loading" :disabled="!isFormValid || loading" color='accent' type='submit'>
                    <span slot="loader" class="custom-loader">
                      <v-icon light>mdi-cached</v-icon>
                    </span>
                    Signup
                  </v-btn>
                  <h5>
                    Already have an account?
                    <router-link to='/signin'>
                      Signin
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
  name: 'Signup',
  data() {
    return {
      isFormValid: true,
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      usernameRules: [
        username => !! username || 'Username is required',
        username => username.length < 10 || 'Username must be more than 10 characters',
      ],
      emailRules: [
        email => !! email || 'Email is required',
        email => /.@+/.test(email) || 'Email must be valid'
      ],
      passwordRules: [
        password => !! password || 'Password is required',
        password => password.length < 7 || 'Password must be less than 7 characters',
        confirmation => confirmation === this.password || 'Passwords must match'
      ],
    }
  },
  watch: {
    user(value) {
      if (value) {
        this.$router.push("/")
      }
    }
  },
  computed: {
    ...mapGetters(['error', 'loading', 'user'])
  },
  methods: {
    handleSignupUser() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('signupUser', {
          username: this.username,
          email: this.email,
          password: this.password,
        })
      }
    }
  }
}
</script>
