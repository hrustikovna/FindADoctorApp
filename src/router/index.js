import { createRouter, createWebHistory } from 'vue-router'

import { useUserStore } from '../stores/userStore';

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AppointmentView from '../views/AppointmentView.vue'
import ContactsView from '../views/ContactsView.vue'
import DepartmentsView from '../views/DepartmentsView.vue'
import DoctorsView from '../views/DoctorsView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'


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
      component: AppointmentView,
      meta: { auth: true },
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
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
  ]
})

router.beforeEach((to, from) => {
  const userStore = useUserStore();
  
  if(to.meta.auth && !userStore.isAuthenticated){ 
       return { name: "login"};
}
});

export default router;
