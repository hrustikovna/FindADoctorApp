import "./assets/vendor/fontawesome-free/css/all.min.css"
import "./assets/vendor/animate.css/animate.min.css"  
import "./assets/vendor/bootstrap/css/bootstrap.min.css"  
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"  
import "./assets/vendor/boxicons/css/boxicons.min.css"  
import "./assets/vendor/glightbox/css/glightbox.min.css"  
import "./assets/vendor/remixicon/remixicon.css"  
import "./assets/vendor/swiper/swiper-bundle.min.css"

import "./assets/css/style.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const firebaseConfig = {
    apiKey: "AIzaSyC5ALLiNht_j9FuBtB8sLwTnuL45cg5tf0",
    authDomain: "rateadoctor-2c52f.firebaseapp.com",
    projectId: "rateadoctor-2c52f",
    storageBucket: "rateadoctor-2c52f.appspot.com",
    messagingSenderId: "160947965662",
    appId: "1:160947965662:web:a6ab939cd2f44f51c4bc4f"
  };

const app = createApp(App)

app.use(createPinia())
app.use(router)

const mountedApp = app.mount('#app')
// console.log(mountedApp)
