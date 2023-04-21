import "./assets/vendor/fontawesome-free/css/all.min.css"
import "./assets/vendor/animate.css/animate.min.css"  
import "./assets/vendor/bootstrap/css/bootstrap.min.css"  
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"  
import "./assets/vendor/boxicons/css/boxicons.min.css"  
import "./assets/vendor/glightbox/css/glightbox.min.css"  
import "./assets/vendor/remixicon/remixicon.css"  
import "./assets/vendor/swiper/swiper-bundle.min.css"
import "vue-awesome-paginate/dist/style.css"

import "./assets/css/style.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueAwesomePaginate from "vue-awesome-paginate"

const app = createApp(App)

app.use(createPinia())
app.use(router)

const mountedApp = app.mount('#app')
// console.log(mountedApp)

createApp(App).use(VueAwesomePaginate).mount("#app")
