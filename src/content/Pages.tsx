import { IMAGES, PAGES } from "./Variables";

const tempRedirect = (name: string, url: string) => {
  "";
};

/* About Page */
const ABOUT_PAGE_MENU_BUTTONS = [
  {
    name: PAGES.ABOUT_PAGE.name,
    redirect: tempRedirect,
    url: PAGES.ABOUT_PAGE.url
  }
];

const ABOUT_PAGE = {
  menuButtons: ABOUT_PAGE_MENU_BUTTONS,
  name: PAGES.ABOUT_PAGE.name,
  url: PAGES.ABOUT_PAGE.url
};

/* Booking Page */
const BOOKING_PAGE_MENU_BUTTONS = [
  {
    name: PAGES.BOOKING_PAGE.name,
    redirect: tempRedirect,
    url: PAGES.BOOKING_PAGE.url
  }
];

const BOOKING_PAGE = {
  menuButtons: BOOKING_PAGE_MENU_BUTTONS,
  name: PAGES.BOOKING_PAGE.name,
  url: PAGES.BOOKING_PAGE.url
};

/* Login Page */
const LOGIN_PAGE_MENU_BUTTONS = [
  {
    name: PAGES.LOGIN_PAGE.Login.name,
    redirect: tempRedirect,
    url: PAGES.LOGIN_PAGE.Login.url
  },
  {
    name: PAGES.LOGIN_PAGE.Register.name,
    redirect: tempRedirect,
    url: PAGES.LOGIN_PAGE.Register.url
  }
];

const LOGIN_PAGE = {
  menuButtons: LOGIN_PAGE_MENU_BUTTONS,
  name: PAGES.LOGIN_PAGE.Login.name,
  url: PAGES.LOGIN_PAGE.Login.url
};

/* Register Page */
const REGISTER_PAGE = {
  menuButtons: LOGIN_PAGE_MENU_BUTTONS,
  name: PAGES.LOGIN_PAGE.Register.name,
  url: PAGES.LOGIN_PAGE.Register.url
};

/* Home Page */
const comp1 = {
  h1: "Cats",
  img: IMAGES.CAT_IMAGE.img,
  p:
    "Cats are fluffy, awesome and the reason why the internet exist. Just by looking at their cute faces makes you happy. So you are not buying a pet you are buying happines. In this case renting happines for a reasoniable price"
};

const comp2 = {
  h1: "Coffe",
  img: IMAGES.CAT_COFFE_IMAGE.img,
  p:
    "Coffe is good, Coffe is warm, Coffie is life, Drink Coffe and you will see your purpose in life"
};

const HOME_PAGE_COMPONENTS = [comp1, comp2];

const HOME_PAGE_MENU_BUTTONS = [
  {
    name: PAGES.HOME_PAGE.name,
    redirect: tempRedirect,
    url: PAGES.HOME_PAGE.url
  }
];

const HOME_PAGE = {
  H1PImageList: HOME_PAGE_COMPONENTS,
  menuButtons: HOME_PAGE_MENU_BUTTONS,
  name: PAGES.HOME_PAGE.name,
  url: PAGES.HOME_PAGE.url
};

/* Profile Page */
const PROFILE_PAGE_MENU_BUTTONS = [
  {
    name: PAGES.PROFILE_PAGE.name,
    redirect: tempRedirect,
    url: PAGES.PROFILE_PAGE.url
  }
];

const PROFILE_PAGE = {
  menuButtons: PROFILE_PAGE_MENU_BUTTONS,
  name: PAGES.PROFILE_PAGE.name,
  url: PAGES.PROFILE_PAGE.url
};

const NAVBAR_BUTTONS = [
  { name: ABOUT_PAGE.name, redirect: tempRedirect, url: ABOUT_PAGE.url },
  {
    name: BOOKING_PAGE.name,
    redirect: tempRedirect,
    url: BOOKING_PAGE.url
  },
  { name: LOGIN_PAGE.name, redirect: tempRedirect, url: LOGIN_PAGE.url },
  { name: HOME_PAGE.name, redirect: tempRedirect, url: HOME_PAGE.url },
  {
    name: PROFILE_PAGE.name,
    redirect: tempRedirect,
    url: PROFILE_PAGE.url
  }
];

export {
  ABOUT_PAGE,
  BOOKING_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  PROFILE_PAGE,
  REGISTER_PAGE,
  NAVBAR_BUTTONS
};
