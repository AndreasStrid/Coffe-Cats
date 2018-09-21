import * as CAT_IMAGE_IMP from './images/cat_in_coffecup.jpg';
import * as COFFE_IMAGE from './images/coffe_cat_art.jpg';

const PAGES = {
    ABOUT_PAGE: { name: 'About', url: '/about' },
    BOOKING_PAGE: { name: 'Booking', url: '/booking' },
    HOME_PAGE: { name: 'Home', url: '/home' },
    LOGIN_PAGE: { name: 'Login', url: '/login' },
    PROFILE_PAGE: { name: 'Profile', url: '/profile' }
};

const IMAGES = {
    CAT_COFFE_IMAGE: { name: 'CAT_COFFE_IMAGE', img: COFFE_IMAGE },
    CAT_IMAGE: { name: 'CAT_IMAGE', img: CAT_IMAGE_IMP }

};

enum ListStyle {
    MENU = 'menu',
    NAVBAR = 'navBar'
}

// enum GridStyle {
//     APP_GRID= 'appGrid',
//     NAVBAR_GRID= "navBarGrid",
//     MENU_GRID = "menuGrid",
//     CONTENT_GRID= "contentGrid"
// }

// enum PageStyle {
//     MENU = 'menu',
//     NAVBAR = 'navBar',
//     HOME_PAGE = 'homePage'
// }

// enum ComponentStyle{
//     H1PIMAGE: ''
// }


// funci: ((e: React.MouseEvent<HTMLElement>) => void)[];
// funci: Array<((e: React.MouseEvent<HTMLElement>) => void)>;
// funci: Array<(<T>(arg1: T) => any)>;

export { PAGES, ListStyle, IMAGES };
