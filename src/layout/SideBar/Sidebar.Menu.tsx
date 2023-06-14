import IconAntd from '../../components/IconAntd';

export const itemsAdmin: any = [
    {
        label: 'Tổng quan',
        key: '/',
        icon: <IconAntd icon="DashboardOutlined" />,
    },
    {
        label: 'Sản phẩm',
        key: '/product',
        icon: <IconAntd icon="MergeCellsOutlined" />,
        children: [
            {
                label: 'Danh mục',
                key: 'product/category',
                icon: <IconAntd icon="InboxOutlined" />,
            },
            {
                label: 'Sản phẩm',
                key: 'product',
                icon: <IconAntd icon="ScheduleOutlined" />,
            },
        ],
    },
    // {
    //     label: 'Khách hàng',
    //     key: 'customer',
    //     icon: <IconAntd icon="TeamOutlined" />,
    // },
    // {
    //     label: 'Đơn hàng',
    //     key: 'order',
    //     icon: <IconAntd icon="SwitcherOutlined" />,
    // },

    // {
    //     label: 'Mã giảm giá',
    //     key: 'voucher',
    //     icon: <IconAntd icon="BarcodeOutlined" />,
    // },

    // {
    //     label: 'Thông báo',
    //     key: 'notification',
    //     icon: <IconAntd icon="NotificationOutlined" />,
    // },

    // {
    //     label: 'Tin tức',
    //     key: 'news',
    //     icon: <IconAntd icon="ProfileOutlined" />,
    // },
    // {
    //     label: 'Báo cáo',
    //     key: 'report',
    //     icon: <IconAntd icon="BarChartOutlined" />,
    //     children: [
    //         {
    //             label: 'Bán hàng',
    //             key: 'report/sell',
    //             icon: <IconAntd icon="UserSwitchOutlined" />,
    //         },
    //     ],
    // },
    // {
    //     label: 'Tài khoản',
    //     key: 'account',
    //     icon: <IconAntd icon="UserOutlined" />,
    // },
    // {
    //     label: 'Cấu hình',
    //     key: 'setting',
    //     icon: <IconAntd icon="SettingOutlined" />,
    // },
];

export const itemAccountants = [
    {
        label: 'Tổng quan',
        key: '/',
        icon: <IconAntd icon="DashboardOutlined" />,
    },
    {
        label: 'Sản phẩm',
        key: '/product',
        icon: <IconAntd icon="MergeCellsOutlined" />,
        children: [
            {
                label: 'Danh mục',
                key: 'product/category',
                icon: <IconAntd icon="InboxOutlined" />,
            },
            {
                label: 'Sản phẩm',
                key: 'product',
                icon: <IconAntd icon="ScheduleOutlined" />,
            },
        ],
    },
    {
        label: 'Khách hàng',
        key: 'customer',
        icon: <IconAntd icon="TeamOutlined" />,
    },
    {
        label: 'Đơn hàng',
        key: 'order',
        icon: <IconAntd icon="SwitcherOutlined" />,
    },
    {
        label: 'Mã giảm giá',
        key: 'voucher',
        icon: <IconAntd icon="BarcodeOutlined" />,
    },
    {
        label: 'Báo cáo',
        key: 'report',
        icon: <IconAntd icon="BarChartOutlined" />,
        children: [
            {
                label: 'Bán hàng',
                key: 'report/sell',
                icon: <IconAntd icon="UserSwitchOutlined" />,
            },
            // {
            //     label: 'Gian hàng',
            //     key: 'report/stall',
            //     icon: <IconAntd icon="MergeCellsOutlined" />,
            // },
        ],
    },
];

export const itemsNews = [
    {
        label: 'Thông báo',
        key: 'notification',
        icon: <IconAntd icon="NotificationOutlined" />,
    },

    {
        label: 'Tin tức',
        key: 'news',
        icon: <IconAntd icon="ProfileOutlined" />,
    },
];
