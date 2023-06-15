import { Spin } from 'antd';
import { ReactNode } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const Wrapper = ({ loading = true, children }: { loading?: boolean; children?: ReactNode }) => {
    return (
        <Spin spinning={loading} indicator={<ClimbingBoxLoader color="orange" />}>
            {children}
        </Spin>
    );
};

export default Wrapper;
