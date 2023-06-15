import { ConfigProvider, Spin } from 'antd';
import AppLoading from '../src/assets/kinhmat.json';
import vi_VN from 'antd/lib/locale/vi_VN';
import moment from 'moment';
import styled from 'styled-components';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Snowfall from 'react-snowfall';
import Lottie from 'lottie-react';
import MainPage from './features/MainPage';
import GlobalStyle from './config/global.style';
import { APP_LOADING } from './context/types';
import useCallContext from './hooks/useCallContext';
import hoadao from '../src/assets/images/hoadao.png';
moment.utc().locale('vi');
const snowflake1 = document.createElement('img');
snowflake1.style.width = '50px';
snowflake1.style.height = '50px';
snowflake1.src = hoadao;
function App() {
    const { state, dispatch } = useCallContext();
    const [role, setRole] = React.useState<number>();

    const location = useLocation();
    // loading when going to app
    React.useEffect(() => {
        setTimeout(() => {
            dispatch({ type: APP_LOADING, payload: false });
        }, 2500);
    }, []);

    React.useLayoutEffect(() => {
        // if (LocalStorage.getToken()) {
        //     authService.info().then((res) => {
        //         setRole(res.data?.dfTypeUserId);
        //         dispatch({
        //             type: SET_INFO,
        //             payload: { ...res?.data, role: res?.data?.dfTypeUserId },
        //         });
        //     });
        // }
        // if (LocalStorage.getBG()) {
        //     dispatch({
        //         type: SET_BG_APP,
        //         payload: JSON.parse(LocalStorage.getBG() as any),
        //     });
        // }
    }, []);

    // setup socket to context

    return (
        <SpinLoadingStyled
            spinning={state.appLoading && location.pathname !== '/retrievalPassword'}
            indicator={
                <ContainerLoading>
                    <div style={{ height: '600px', width: '600px' }}>
                        <Lottie animationData={AppLoading} loop={true} />
                    </div>
                </ContainerLoading>
            }
        >
            <ConfigProvider locale={vi_VN}>
                <MainPage role={'admin'} />
            </ConfigProvider>
            {/* define default style */}
            <GlobalStyle />
            {!state?.appBackground?.showFlower && state?.appBackground?.show && (
                <Snowfall
                    color={state?.appBackground?.color}
                    style={{
                        position: 'fixed',
                        width: '100vw',
                        height: '100vh',
                    }}
                />
            )}
            {state?.appBackground?.showFlower && state?.appBackground?.show && (
                <Snowfall
                    color={state?.appBackground?.color}
                    style={{
                        position: 'fixed',
                        width: '100vw',
                        height: '100vh',
                    }}
                    snowflakeCount={30}
                    radius={[10, 20]}
                    images={[snowflake1]}
                />
            )}
            {/* loading khi đồng bộ */}

            {/* <ModalChangePassword openModal={state?.openModalChangePassword} /> */}
        </SpinLoadingStyled>
    );
}

const SpinLoadingStyled = styled(Spin)`
    &&& {
        top: 0;
        left: 0;
    }
`;

const ContainerLoading = styled.div`
    top: 0 !important;
    margin: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    display: flex !important;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

export default App;
