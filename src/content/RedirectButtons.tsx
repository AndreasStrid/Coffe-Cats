import { URL } from "./Variables";

const notInitializedRedirect = (url: string) => {
  url = "";
};

const MENU_BUTTONS_ABOUT = [
  { name: "Cat", url: URL.ABOUT_CAT, redirect: notInitializedRedirect }
]
const MENU_BUTTONS_BOOKING = [
  { name: "Böök", url: URL.BOOKING_1, redirect: notInitializedRedirect }
]
const MENU_BUTTONS_HOME = [
  { name: "Home", url: URL.HOME, redirect: notInitializedRedirect }
]
const MENU_BUTTONS_PROFILE = [
  {
    name: "Pröfile",
    url: URL.PROFILE_PRÖ,
    redirect: notInitializedRedirect
  }
]
const MENU_BUTTONS_SIGN = [
  {
    name: "SignUp",
    url: URL.SIGN_UP,
    redirect: notInitializedRedirect
  },
  { name: "SignIn", url: URL.SIGN_IN, redirect: notInitializedRedirect }
]



const NAVBAR_BUTTONS = [
  { name: "About", url: URL.ABOUT, redirect: notInitializedRedirect },
  { name: "Booking", url: URL.BOOKING, redirect: notInitializedRedirect },
  { name: "Home", url: URL.HOME, redirect: notInitializedRedirect },
  { name: "Profile", url: URL.PROFILE, redirect: notInitializedRedirect },
  { name: "Sign/in/up", url: URL.SIGN, redirect: notInitializedRedirect }
];

export { NAVBAR_BUTTONS, MENU_BUTTONS_ABOUT, MENU_BUTTONS_BOOKING, MENU_BUTTONS_HOME, MENU_BUTTONS_PROFILE, MENU_BUTTONS_SIGN };
