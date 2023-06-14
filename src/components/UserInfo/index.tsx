import LocalStorage from '../../apis/LocalStorage';
// import PushNoti from '@/features/App/pushNoti';
import useCallContext from '../../hooks/useCallContext';
import { DownOutlined } from '@ant-design/icons';
import { Avatar, Badge, Form, Popconfirm, Popover, Row } from 'antd';
import React from 'react';
import IconAntd from '../IconAntd';

import { SET_MODAL_CHANGE_PASSWORD } from '../../context/types';
// import { appService } from '@/service';
// import Clock from 'react-live-clock';
import styled from 'styled-components';

const UserInfo = () => {
    const { state, dispatch } = useCallContext();
    const popoverRef = React.useRef(null);
    const [countNoti, setCountNoti] = React.useState(0);

    const [form] = Form.useForm();

    // React.useEffect(() => {
    //     appService.getCountNoti().then((res) => {
    //         setCountNoti(res?.data?.count || 0);
    //     });
    // }, [state.callbackNoti]);

    const userMenuOptions = (
        <ul className="gx-user-popover">
            <li className="gx-font-weight-medium" onClick={() => dispatch({ type: SET_MODAL_CHANGE_PASSWORD })}>
                Đổi mật khẩu
            </li>
            <Popconfirm
                title={<strong style={{ marginTop: '10px' }}>Bạn chắc chắn muốn đăng xuất tài khoản này?</strong>}
                onConfirm={() => {
                    LocalStorage.removeToken();
                    window.location.reload();
                }}
                okText="Ok"
                cancelText="Hủy"
                okButtonProps={{
                    type: 'primary',
                }}
            >
                <li className="gx-font-weight-medium">Đăng xuất</li>
            </Popconfirm>
        </ul>
    );

    return (
        <>
            <Row wrap={false} justify="start" className="gx-avatar-row gx-m-0">
                <Popover placement="bottomRight" content={userMenuOptions}>
                    <Avatar src={state?.info?.avatar} className="gx-size-40 gx-pointer gx-mr-3" alt="" />
                    <span className="gx-avatar-name gx-font-weight-bold" style={{ color: 'white' }}>
                        {state?.info?.fullName}
                        <DownOutlined className="gx-fs-sm gx-ml-4" />
                    </span>
                </Popover>
            </Row>
            <Row justify="start" align="middle" className="gx-app-nav" style={{ marginTop: '15px' }}>
                <ClockStyled>{/* <Clock format="hh:mm:ss" ticking /> */}</ClockStyled>
                <li>
                    <Popover
                        ref={popoverRef}
                        trigger="click"
                        placement="rightBottom"
                        // content={<PushNoti countNoti={countNoti} popoverRef={popoverRef} />}

                        // title="Title"
                    >
                        <Badge showZero count={countNoti || 0}>
                            <IconAntd style={{ color: 'white' }} icon="BellOutlined" />
                        </Badge>
                    </Popover>
                </li>
            </Row>
        </>
    );
};

const ClockStyled = styled.li`
    border-radius: 10px;
    margin-left: 20px;
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    background: linear-gradient(to right, #2b5876, #4e4376);
    border: 1px dashed #ccc;
    & * {
        font-size: 1.6rem;
        font-weight: 700;
        color: white;
    }
`;

export default React.memo(UserInfo);
