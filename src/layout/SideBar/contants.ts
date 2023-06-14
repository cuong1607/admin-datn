import { ADMIN } from '../../contants';
import { itemsAdmin } from './Sidebar.Menu';

export const switchSidebar = (group: string) => {
    switch (group) {
        case ADMIN.main:
            return itemsAdmin;
        default:
            return [];
    }
};
