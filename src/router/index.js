import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/login.vue'

import '../assets/styles/main.css';

import Student from '../components/student.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    }
  ]
})

export default router
