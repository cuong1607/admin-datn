// import PushNoti from '@/features/App/pushNoti';
import useCallContext from '@/hooks/useCallContext';
// import { appService } from '@/service';
import { BellOutlined, MenuOutlined } from '@ant-design/icons';
import { Badge, Layout, Popover } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = ({ handleCallbackCollapseMobile }: { handleCallbackCollapseMobile: () => void }) => {
    // const { state, dispatch } = useCallContext();

    const popoverRef = React.useRef(null);
    const [countNoti, setCountNoti] = React.useState(0);
    // React.useEffect(() => {
    //     appService.getCountNoti().then((res) => {
    //         setCountNoti(res?.data?.count || 0);
    //     });
    // }, [state.callbackNoti]);

    return (
        <>
            <Layout.Header>
                <div className="gx-linebar gx-mr-3">
                    <MenuOutlined className="gx-icon-btn" onClick={handleCallbackCollapseMobile} />
                </div>
                <Link className="gx-d-block gx-d-lg-none gx-pointer" to="/">
                    {/* <img height={30} alt="" src={images.logo} /> */}
                </Link>
                <ul className="gx-header-notifications gx-ml-auto">
                    <li className="gx-notify">
                        <Popover
                            overlayClassName="gx-popover-horizantal"
                            placement="bottomRight"
                            content={<></>}
                            trigger="click"
                        >
                            <Badge showZero count={countNoti || 0}>
                                <span className="gx-pointer gx-d-block">
                                    <BellOutlined style={{ fontSize: '24px' }} />
                                </span>
                            </Badge>
                        </Popover>
                    </li>

                    {/* {width < TAB_SIZE && (
                        <>
                            <li className="gx-user-nav">
                                <UserInfo />
                            </li>
                        </>
                    )} */}
                </ul>
            </Layout.Header>
        </>
    );
};

export default Topbar;
