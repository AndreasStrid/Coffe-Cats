import { IMAGES } from "./Variables";

const HOME_PAGE = {
  comp1: {
    h1: "Cats",
    img: IMAGES.CAT_IMAGE.img,
    p:
      "Cats are fluffy, awesome and the reason why the internet exist. Just by looking at their cute faces makes you happy. So you are not buying a pet you are buying happines. In this case renting happines for a reasoniable price"
  },
  comp2: {
    h1: "Coffe",
    img: IMAGES.CAT_COFFEE_IMAGE.img,
    p:
      "Coffe is good, Coffe is warm, Coffie is life, Drink Coffe and you will see your purpose in life"
  }
};

const SIGN_IN_PAGE = {
  label: "Login",
  stateNames: ["userName", "password"]
};
const SIGN_UP_PAGE = {
  label: "Login",
  stateNames: ["userName", "password"]
};

export { HOME_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE };
