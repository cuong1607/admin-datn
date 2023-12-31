import NotFoundPage from '../features/Notfound';
import { Suspense } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

export const PublicRoutes = [{ path: '*', element: <NotFoundPage /> }];

const Lazy = ({ children }: { children: any }) => {
    return (
        <Suspense
            fallback={
                <div
                    style={{
                        height: '100vh',
                        width: '100%',
                        backgroundColor: 'rgba(0,0,0,.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <ClimbingBoxLoader />
                </div>
            }
        >
            {children}
        </Suspense>
    );
};

export default Lazy;
