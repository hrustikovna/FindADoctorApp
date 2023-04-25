<template>
      <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="index.html" class="logo me-auto"><img src="../assets/img/logo.png" alt="" class="img-fluid"></a></h1>

	<!-- .navbar -->
      <nav id="navbar" class="navbar">
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/departments">Departments</RouterLink></li>
          <li><RouterLink to="/doctors">Doctors</RouterLink></li>
          <li><RouterLink to="/appointment">Appointment</RouterLink></li>
          <li><RouterLink to="/contacts">Contact Us</RouterLink></li>
        </ul>
      </nav>
      
      <span v-if="userStore.isAuthenticated" class="mb-1 p-4">{{ userStore.getUser.name }}</span>
      <button v-if="!userStore.isAuthenticated" class="appointment-btn scrollto" type="submit" @click.prevent="loginClicked"><span class="d-none d-md-inline">Login</span></button>
      <button v-if="!userStore.isAuthenticated" class="appointment-btn scrollto" type="submit" @click.prevent="registerClicked"><span class="d-none d-md-inline">Register</span></button>
      <button v-if="userStore.isAuthenticated" class="appointment-btn scrollto" type="submit" @click.prevent="logoutClicked"><span class="d-none d-md-inline">Logout</span></button>
    </div>
  </header>
        <!-- End Header -->

</template>

<script>
import { logout } from '../data/userRepository';
import { RouterLink } from 'vue-router';
import { mapStores } from 'pinia';
import {useUserStore} from '../stores/userStore';


export default {
  name: "AppHeader",
  props:{
    user: {
      type: Object,
      required: false,
      default: null
    }
  },
  computed:{
        ...mapStores(useUserStore)
  },
  methods: {
    loginClicked() {
      this.$router.push({name: "login"});
    },
    registerClicked() {
      this.$router.push({name: "register"})
    },
    logoutClicked() {
      logout().then(() => {
        this.userStore.logout();
        this.$router.push({name: "home"})
      }).catch((error) => {
        console.log(error)
      });
    }
  }
}
</script>

<style scoped>
</style>
