import * as CAT_IMAGE_IMP from "./images/cat_in_coffecup.jpg";
import * as COFFE_IMAGE from "./images/coffe_cat_art.jpg";

const PAGES = {
  ABOUT_PAGE: { name: "About", url: "/about" },
  BOOKING_PAGE: { name: "Booking", url: "/booking" },
  HOME_PAGE: { name: "Home", url: "/home" },
  LOGIN_PAGE: {
    Content: { userName: "UserName", password: "Passowrd" },
    Login: { name: "Login", url: "/login" },
    Register: { name: "Register", url: "/register" }
  },
  PROFILE_PAGE: { name: "Profile", url: "/profile" }
};

const IMAGES = {
  CAT_COFFEE_IMAGE: { name: "CAT_COFFEE_IMAGE", img: COFFE_IMAGE },
  CAT_IMAGE: { name: "CAT_IMAGE", img: CAT_IMAGE_IMP }
};

const API_URL = {
  base: "http://locashost:30001",
  checkToken: "/checkToken",
  loginIn: "/login"
};

const SUCCESS_MESSAGES = { login: "Login Successful" };

const ERROR_MESSAGES = { login: "Failed to login" };

enum SessionStorage {
  TOKEN = "token"
}

enum CustomerLevel {
  BRONZE = 1,
  SIlVER = 2,
  GOLD = 3
}

enum ListStyle {
  MENU = "menu",
  NAVBAR = "navBar"
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

export {
  API_URL,
  CustomerLevel,
  ERROR_MESSAGES,
  IMAGES,
  ListStyle,
  PAGES,
  SessionStorage,
  SUCCESS_MESSAGES
};
