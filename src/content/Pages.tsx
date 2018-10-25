import { IMAGES } from "./Variables";
import language from "./LoadLanguage"

const ABOUT_PAGE = {
  text: "ABOUT_PAGE",
};
const BOOKING_PAGE = {
  text: "BOOKING_PAGE",
};

const PROFILE_PAGE = {
  text: "PROFILE_PAGE",
};

const HOME_PAGE = [
  {
    h1: language.home_page_comp1_h1,
    img: IMAGES.CAT.img,
    p: language.home_page_comp1_p
  }
  ,
  {
    h1: language.home_page_comp2_h1,
    img: IMAGES.CAT_COFFEE.img,
    p: language.home_page_comp2_p
  }
];

const SIGN_IN_PAGE = {
  label: language.sign_in_page_label,
  stateNames: language.sign_inup_stateNames
};
const SIGN_UP_PAGE = {
  label: language.sign_up_page_label,
  stateNames: language.sign_inup_stateNames
};

export { ABOUT_PAGE, BOOKING_PAGE, HOME_PAGE, PROFILE_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE };
