import LocalStorage from '../apis/LocalStorage';
import { PublicRoutes } from '../config/Lazy.routes';
import { routerPage } from '../config/contants.routes';
import { AdminRoutes, AuthRoutes } from '../config/routes';
import { ADMIN } from '../contants';
import PageLayout from '../layout';
import React from 'react';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
const switchRoute = (role: string) => {
    // 'group'
    switch (role) {
        case ADMIN.main:
            return AdminRoutes;
        default:
            return PublicRoutes;
    }
};

// config routes
const MainPage = ({ role }: { role: string }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    console.log('pathname', pathname)
    // let element = useRoutes(LocalStorage.getToken() ? switchRoute(role) : AuthRoutes);
    let element = useRoutes( switchRoute(role));

    const [logged, setLogged] = React.useState(false);

    React.useEffect(() => {
        // navigate('/');
        if (true) {
            setLogged(true);
            if (pathname === routerPage.login) {
                return navigate('/');
            }
        } else {
            switch (pathname) {
                case routerPage.login:
                    navigate(routerPage.login);
                    break;
                default:
                    break;
            }
            navigate(routerPage.login);
        }
    }, [logged, pathname, role]);

    return element;
};

export default PageLayout(MainPage);
