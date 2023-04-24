<template>
  <section class="text-center text-lg-start">
    <div class="container-fluid">
      <div class="section-title">
        <h2>Please Sign In</h2>
        <h3>{{ error }}</h3>
      </div>
      <div class="card mb-5">
        <div class="row g-0 d-flex align-items-center justify-content-center">
          <div class="col-lg-4">
            <div class="card-body py-5 px-md-5">
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input v-model="email" type="email" id="form2Example1" class="form-control" />
                <label class="form-label" for="form2Example1">Email address</label>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <input v-model="password" type="password" id="form2Example2" class="form-control" />
                <label class="form-label" for="form2Example2">Password</label>
              </div>

              <!-- 2 column grid layout for inline styling -->
              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <!-- Checkbox -->
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                      checked
                    />
                    <label class="form-check-label" for="form2Example31"> Remember me </label>
                  </div>
                </div>

                <div class="col">
                  <!-- Simple link -->
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                class="btn btn-primary btn-block mb-4"
                @click.prevent="loginUser()"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { login } from '../data/userRepository'
import { mapStores } from 'pinia'
import { useUserStore } from '../stores/userStore'

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  computed: {
    ...mapStores(useUserStore)
  },
  methods: {
    loginUser() {
      if (this.email && this.password) {
        console.log("Login User")
        login(this.email, this.password).then((auth) => {
            console.log(auth);
            this.userStore.login(auth.uid, auth.email, auth.displayName);
            console.log ("Login: ", this.userStore.getUser);
            this.$router.push({ name: 'home' })
          })
          .catch((error) => {
            console.log(error)
            this.error = 'Invalid Email or Password'
          })
      }
    }
  }
}
</script>

<style scoped></style>
