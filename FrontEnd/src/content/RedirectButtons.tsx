import { URL } from "./Variables";
import language from "./LoadLanguage"

const notInitializedRedirect = (url: string) => {
  url = "";
};

const MENU_BUTTONS_ABOUT = [
  { name: language.about_menu_cat_button, url: URL.ABOUT_CAT, redirect: notInitializedRedirect }
]
const MENU_BUTTONS_BOOKING = [
  { name: language.booking_menu_book_button, url: URL.BOOKING_1, redirect: notInitializedRedirect }
]
const MENU_BUTTONS_HOME = [
  { name: language.home_menu_home_button, url: URL.HOME, redirect: notInitializedRedirect }
]
const MENU_BUTTONS_PROFILE = [
  {
    name: language.profile_menu_profile_button,
    url: URL.PROFILE_PRÖ,
    redirect: notInitializedRedirect
  }
]
const MENU_BUTTONS_SIGN = [{}
  // {
  //   name: language.sign_menu_sing_up_button,
  //   url: URL.SIGN_UP,
  //   redirect: notInitializedRedirect
  // },
  // { name: language.sign_page_sign_in_button, url: URL.SIGN_IN, redirect: notInitializedRedirect },
  // { name: language.sign_page_sign_out_button, url: URL.SIGN_IN, redirect: notInitializedRedirect }
]

const NAVBAR_BUTTONS = [
  { name: language.about_nav_button, url: URL.ABOUT, redirect: notInitializedRedirect },
  { name: language.booking_nav_button, url: URL.BOOKING, redirect: notInitializedRedirect },
  { name: language.home_nav_button, url: URL.HOME, redirect: notInitializedRedirect },
  { name: language.profile_nav_button, url: URL.PROFILE, redirect: notInitializedRedirect },
  { name: language.sing_nav_button, url: URL.SIGN, redirect: notInitializedRedirect }
];

export { NAVBAR_BUTTONS, MENU_BUTTONS_ABOUT, MENU_BUTTONS_BOOKING, MENU_BUTTONS_HOME, MENU_BUTTONS_PROFILE, MENU_BUTTONS_SIGN };
