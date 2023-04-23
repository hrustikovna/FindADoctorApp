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
      
      <button class="appointment-btn scrollto"><span class="d-none d-md-inline">Login</span></button>
      <button class="appointment-btn scrollto"><span class="d-none d-md-inline">Logout</span></button>
    </div>
  </header>
        <!-- End Header -->

</template>

<script>
import { RouterLink } from 'vue-router';
import { mapStores } from 'pinia';
// import { useUserStore } from '../stores/user';

export default {
  name: 'AppHeader',
  components: {
    RouterLink
  },
  // props: {
  //   user: {
  //     type: Object,
  //     required: true
  //   }
  // },
  // computed: {
  //   ...mapStores(useUserStore)
  // },
  // mounted() {
  //   this.userStore.setName()
  // }
}
</script>

<style scoped></style>
