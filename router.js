import Vue from "vue";
import router from "vue-router";
import Login from './components/pages/login.vue'
import Forgot from "./components/pages/forgot.vue";
import Registration from "./components/pages/registration.vue";
import Calender from "./components/pages/calender.vue";
import Inquiries from "./components/pages/inquiries.vue";
import Invoices from "./components/pages/invoices.vue";
import About from "./components/pages/about.vue";
import Profile from "./components/pages/profile.vue";
import Signalment from "./components/pages/signalment.vue";
import Cv from "./components/pages/cv.vue"

Vue.use(router);
export default new router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/forgot',
            name: 'Forgot',
            component: Forgot
        },
        {
            path: '/registration',
            name: 'Registration',
            component: Registration
        },
        {
            path: '/calender',
            name: 'Calender',
            component: Calender
        },
        {
            path: '/inquiries',
            name: 'Inquiries',
            component: Inquiries
        },
        {
            path: '/invoices',
            name: 'Invoices',
            component: Invoices
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/signalment',
            name: 'Signalment',
            component: Signalment
        },
        {
            path: '/cv',
            name: 'Cv',
            component: Cv
        },
    ]
})