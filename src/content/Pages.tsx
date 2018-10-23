import { IMAGES } from "./Variables";


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
    h1: "Cats",
    img: IMAGES.CAT_IMAGE.img,
    p:
      "Cats are fluffy, awesome and the reason why the internet exist. Just by looking at their cute faces makes you happy. So you are not buying a pet you are buying happines. In this case renting happines for a reasoniable price"
  },
  {
    h1: "Coffe",
    img: IMAGES.CAT_COFFEE_IMAGE.img,
    p:
      "Coffe is good, Coffe is warm, Coffie is life, Drink Coffe and you will see your purpose in life"
  }
];

const SIGN_IN_PAGE = {
  label: "Login",
  stateNames: ["userName", "password"]
};
const SIGN_UP_PAGE = {
  label: "Login",
  stateNames: ["userName", "password"]
};

export { ABOUT_PAGE, BOOKING_PAGE, HOME_PAGE, PROFILE_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE };
