import * as CAT_IMAGE_IMP from "./images/cat_in_coffecup.jpg";
import * as COFFE_IMAGE from "./images/coffe_cat_art.jpg";
import * as SWE_FLAG_IMAGE from "./images/swe_flag.svg";
import * as ENG_FLAG_IMAGE from "./images/eng_flag.svg";

const IMAGES = {
  CAT_COFFEE: { name: "CAT_COFFEE_IMAGE", img: COFFE_IMAGE },
  CAT: { name: "CAT_IMAGE", img: CAT_IMAGE_IMP },
  SWE_FLAG: { name: "swe.json", img: SWE_FLAG_IMAGE },
  ENG_FLAG: { name: "eng.json", img: ENG_FLAG_IMAGE }
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
  SIGN_IN: "/sign/in",
  SIGN_OUT: "/sign/out"
};

const URL_ARRAY = [URL.ABOUT, URL.ABOUT_CAT, URL.BOOKING, URL.BOOKING_1, URL.HOME, URL.PROFILE, URL.PROFILE_PRÖ, URL.SIGN, URL.SIGN_UP, URL.SIGN_IN]

const API_URL = {
  base: "http://locashost:30001",
  checkToken: "/checkToken",
  loginIn: "/login"
};

const DEBUG = {
  STORAGE: true,
  ROUTING: false,
};


export {
  API_URL,
  IMAGES,
  URL,
  URL_ARRAY,
  DEBUG
};
