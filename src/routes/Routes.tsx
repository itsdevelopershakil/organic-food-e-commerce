import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import CreateAccount from '../pages/CreateAccount';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';

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
                path: '/sign-in',
                element: <SignupPage />,
            },
            {
                path: '/create-account',
                element: <CreateAccount />,
            },
            {
                path: '*',
                element: <ErrorPage />,
            },
        ],
    },
]);
