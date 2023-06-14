import { ConfigProvider, Spin } from 'antd';
import vi_VN from 'antd/lib/locale/vi_VN';
import moment from 'moment';
import styled from 'styled-components';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { BOX_SHADOW } from './config/theme';
import MainPage from './features/MainPage';
import GlobalStyle from './config/global.style';
import LocalStorage from './apis/LocalStorage';
import { APP_LOADING } from './context/types';
import useCallContext from './hooks/useCallContext';
moment.utc().locale('vi');
const snowflake1 = document.createElement('img');
snowflake1.style.width = '50px';
snowflake1.style.height = '50px';
function App() {
    const [role, setRole] = React.useState('');
    const { dispatch } = useCallContext();

    const location = useLocation();
    React.useEffect(() => {
        setTimeout(() => {
            dispatch({ type: APP_LOADING, payload: false });
        }, 2500);
    }, []);

    React.useLayoutEffect(() => {
        if (LocalStorage.getToken()) {
            // authService.info().then((res) => {
            //     setRole(res.data[Object.keys(res.data)[0]]?.group);
            //     dispatch({
            //         type: SET_INFO,
            //         payload: { ...res.data[Object.keys(res.data)[0]], role: Object.keys(res.data)[0] },
            //     });
            // });
        }

        if (LocalStorage.getBG()) {
            // dispatch({
            //     type: SET_BG_APP,
            //     payload: JSON.parse(LocalStorage.getBG() as any),
            // });
        }
    }, []);

    return (
        <SpinLoadingStyled
            spinning={location.pathname !== '/vn_pay'}
            indicator={
                <ContainerLoading>
                    <div style={{ height: '600px', width: '600px' }}>
                        {/* <Lottie animationData={AppLoading} loop={true} /> */}
                    </div>
                </ContainerLoading>
            }
        >
            <ConfigProvider locale={vi_VN}>
                <MainPage role={'admin'} />
            </ConfigProvider>
            {/* define default style */}
            <GlobalStyle />

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
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

const ContainerLoadingSync = styled.div`
    top: 0 !important;
    margin: 0 !important;
    left: 0 !important;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 9999;
`;

const ContainerLoad = styled.div`
    background-color: white;
    border-radius: 20px;
    box-shadow: ${BOX_SHADOW};
    padding: 40px;
    max-width: 500px;
`;

export default App;
