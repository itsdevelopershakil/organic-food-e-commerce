import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import About from '../pages/About';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import CreateAccount from '../pages/CreateAccount';
import ErrorPage from '../pages/ErrorPage';
import Faqs from '../pages/Faqs';
import HomePage from '../pages/HomePage';
import ShoppingCart from '../pages/ShoppingCart';
import SignupPage from '../pages/SignupPage';
import Wishlist from '../pages/Wishlist';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/sign-in',
                element: <SignupPage />,
            },
            {
                path: '/create-account',
                element: <CreateAccount />,
            },
            {
                path: '/shopping-cart',
                element: <ShoppingCart />,
            },
            {
                path: '/wishlist',
                element: <Wishlist />,
            },
            {
                path: '/checkout',
                element: <Checkout />,
            },
            {
                path: '/faqs',
                element: <Faqs />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '*',
                element: <ErrorPage />,
            },
        ],
    },
]);
