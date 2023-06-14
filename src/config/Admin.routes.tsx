import React from 'react';
import Lazy, { PublicRoutes } from './Lazy.routes';
import { routerPage } from './contants.routes';
const HomePage = React.lazy(() => import('../features/App/home/page'));
const AdminRoutes = [
    {
        path: routerPage.home,
        element: (
            <Lazy>
                <HomePage />
            </Lazy>
        ),
    },

    ...PublicRoutes,
];

export default AdminRoutes;
