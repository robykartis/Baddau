import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import PageNotFound
import PageNotFound from '@/components/PageNotFound.vue'

// import HomeLayouts
import HomeLayouts from '@/components/layouts/home/HomeLayouts.vue'
import AboutView from '../views/AboutView.vue'

// import AuthView
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

// import AdminLayouts
import AdminLayouts from '@/components/layouts/admin/AdminLayouts.vue'
import DashboardView from '../views/admin/DashboardView.vue'

Vue.use(VueRouter)

const routes = [
  { path: "*", component: PageNotFound },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/',
    component: HomeLayouts,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
          title: "Home"
        }
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView,
        meta: {
          title: "About"
        }
      }
    ]
  },
  {
    path: '/',
    component: AdminLayouts,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: DashboardView,
        meta: {
          title: "Dashboard"
        }
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView,
        meta: {
          title: "About"
        }
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next();
})


export default router
