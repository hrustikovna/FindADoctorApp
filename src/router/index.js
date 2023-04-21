import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import AppointmentView from '../views/AppointmentView.vue'
import ContactsView from '../views/ContactsView.vue'
import DepartmentsView from '../views/DepartmentsView.vue'
import DoctorsView from '../views/DoctorsView.vue'
import TestimonialsView from '../views/TestimonialsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: AppointmentView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView
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
