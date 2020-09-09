import Home from '@v/Home';
// 404
import NotFound from '@v/404';
// STORE < init - used in clearCompare function >
import store from '@/store';

const routes = [
    // home
    {
        path: '/',
        name: 'home',
        component: Home,
        alias: '/page/*'
    },
    // 404
    {
        path: '/404',
        name: '404',
        component: NotFound,
        meta: {
            plane: true
        }
    },
    // 404 redirect
    {
        path: '*',
        redirect: '/404'
    }
]
export default routes;
