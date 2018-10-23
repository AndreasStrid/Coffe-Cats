import * as CAT_IMAGE_IMP from "./images/cat_in_coffecup.jpg";
import * as COFFE_IMAGE from "./images/coffe_cat_art.jpg";

const IMAGES = {
  CAT_COFFEE_IMAGE: { name: "CAT_COFFEE_IMAGE", img: COFFE_IMAGE },
  CAT_IMAGE: { name: "CAT_IMAGE", img: CAT_IMAGE_IMP }
};

const URL = {
  ABOUT: "/about",
  ABOUT_CAT: "/about/cat",
  BOOKING_1: "/booking/1",
  BOOKING: "/booking",
  HOME: "/home",
  PROFILE: "/profile",
  PROFILE_PRÖ: "/profile/prö",
  SIGN: "/sign",
  SIGN_UP: "/sign/up",
  SIGN_IN: "/sign/in"
};

const URL_ARRAY = [URL.ABOUT, URL.ABOUT_CAT, URL.BOOKING, URL.BOOKING_1, URL.HOME, URL.PROFILE, URL.PROFILE_PRÖ, URL.SIGN, URL.SIGN_UP, URL.SIGN_IN]

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
  SessionStorage,
  SUCCESS_MESSAGES,
  URL,
  URL_ARRAY
};
