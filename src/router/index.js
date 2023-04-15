import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import AppointmentView from "../views/AppointmentView.vue"
import ContactUsView from "../views/ContactUsView.vue"
import DepartmentsView from "../views/DepartmentsView.vue"
import DoctorsView from "../views/DoctorsView.vue"
import TestimonialsView from "../views/TestimonialsView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: AppointmentView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUsView
    },
    {
      path: '/departments',
      name: 'departments',
      component: DepartmentsView
    },    
    {
      path: '/doctors',
      name: 'doctors',
      component: DoctorsView
    },    
    {
      path: '/testimonials',
      name: 'testimonials',
      component: TestimonialsView
    },
  ]
})

export default router
