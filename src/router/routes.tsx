import { lazy } from 'react';

const Feed = lazy(() => import('../pages/feed'));
const Login = lazy(() => import('../pages/login'));
const Logout = lazy(() => import('../pages/logout'));
const Notifications = lazy(() => import('../pages/notifications'));
const Register = lazy(() => import('../pages/register'));
const Settings = lazy(() => import('../pages/settings'));
const SingleBlue = lazy(() => import('../pages/singleblue'));
const User = lazy(() => import('../pages/user'));
const Auth = lazy(() => import('./Auth'));

const Routes = [
    {
        path: '/login',
        element: <Login />
    }, {
        path: '/register',
        element: <Register />
    }, {
    }, {
        path: '/',
        element: <Auth><Feed /></Auth>
    }, {
        path: '/blue/:repo/:cid',
        element: <Auth><SingleBlue /></Auth>
    }, {
        path: '/user/:did',
        element: <Auth><User /></Auth>
    }, {
    }, {
        path: '/user/:did/posts',
        element: <Auth><User /></Auth>
    }, {
    }, {
        path: '/user/:did/likes',
        element: <Auth><User /></Auth>
    }, {
    }, {
        path: '/user/:did/blocks',
        element: <Auth><User /></Auth>
    }, {
        path: '/notifications',
        element: <Auth><Notifications /></Auth>
    }, {
    }, {
        path: '/settings',
        element: <Auth><Settings /></Auth>
    }, {
        path: '/logout',
        element: <Logout />
    }
]

export default Routes;
