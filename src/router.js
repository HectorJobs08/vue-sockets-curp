import * as VueRouter from 'vue-router';

// Components
import HomePage from '/src/components/Home.vue';
import CurpPage from '/src/components/Curp.vue';
import SocketsPage from '/src/components/Socket.vue';


const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/curp',
        component: CurpPage,
    },
    {
        path: '/sockets',
        component: SocketsPage
    },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

export default router;