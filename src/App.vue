<template>
  <AppHeader :user="user"></AppHeader>

  <main id="main">
    <RouterView></RouterView>
  </main>

  <AppFooter></AppFooter>

  <a href="#" class="scroll-top d-flex align-items-center justify-content-center"
    ><i class="bi bi-arrow-up-short"></i
  ></a>

  <!-- <div id="preloader"></div> -->
</template>

<script>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { mapStores } from 'pinia';
import {useUserStore} from './stores/userStore';
// import LoginView from './components/LoginView.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    RouterView,
    // LoginView
  },
  computed:{
    ...mapStores(useUserStore),
    user() {
      return this.userStore.getUser;
    }
  },
}
</script>

<style scoped></style>
