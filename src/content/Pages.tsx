import H1PImageObj from '../components/h1PImage/H1PImageObj'
import HomePageObj from '../components/pages/homePage/HomePageObj';
import LoginPageObj from '../components/pages/login/LoginPageObj';
import ClickEvent from '../objects/ClickEvent';
import Login from '../objects/Login'
import PageTemplate from '../objects/PageTemplate';
import { IMAGES, PAGES } from './Variables'

/* About Page */
const ABOUT_PAGE_CLICK_EVENTS = [new ClickEvent(PAGES.ABOUT_PAGE.name, new Login('About').logIn)];
const ABOUT_PAGE = new PageTemplate(PAGES.ABOUT_PAGE.name, PAGES.ABOUT_PAGE.url, ABOUT_PAGE_CLICK_EVENTS);

/* Booking Page */
const BOOKING_PAGE_CLICK_EVENTS = [new ClickEvent(PAGES.BOOKING_PAGE.name, new Login('Booking').logIn)];
const BOOKING_PAGE = new PageTemplate(PAGES.BOOKING_PAGE.name, PAGES.BOOKING_PAGE.url, BOOKING_PAGE_CLICK_EVENTS);

/* Login Page */
const LOGIN_PAGE_CLICK_EVENTS = [new ClickEvent(PAGES.LOGIN_PAGE.name, new Login('Booking').logIn)];
const LOGIN_PAGE = new LoginPageObj(PAGES.LOGIN_PAGE.name, PAGES.LOGIN_PAGE.url, LOGIN_PAGE_CLICK_EVENTS);

/* Home Page */
const comp1 = new H1PImageObj('Cats', 'Cats are fluffy, awesome and the reason why the internet exist. Just by looking at their cute faces makes you happy. So you are not buying a pet you are buying happines. In this case renting happines for a reasoniable price', IMAGES.CAT_IMAGE.img);
const comp2 = new H1PImageObj('Coffe', 'Coffe is good, Coffe is warm, Coffie is life, Drink Coffe and you will see your purpose in life', IMAGES.CAT_COFFE_IMAGE.img);
const HOME_PAGE_COMPONENTS = [comp1, comp2];
const HOME_PAGE_CLICK_EVENTS = [new ClickEvent(PAGES.HOME_PAGE.name, new Login('Home').logIn), new ClickEvent(PAGES.HOME_PAGE.name, new Login('Home').logIn), new ClickEvent(PAGES.HOME_PAGE.name, new Login('Home').logIn), new ClickEvent(PAGES.HOME_PAGE.name, new Login('Home').logIn)];
const HOME_PAGE = new HomePageObj(PAGES.HOME_PAGE.name, PAGES.HOME_PAGE.url, HOME_PAGE_CLICK_EVENTS, HOME_PAGE_COMPONENTS);

/* Profile Page */
const PROFILE_PAGE_CLICK_EVENTS = [new ClickEvent(PAGES.PROFILE_PAGE.name, new Login('Booking').logIn)];
const PROFILE_PAGE = new PageTemplate(PAGES.PROFILE_PAGE.name, PAGES.PROFILE_PAGE.url, PROFILE_PAGE_CLICK_EVENTS);

const NAVBAR_CLICK_EVENTS = [new ClickEvent(ABOUT_PAGE.name, ABOUT_PAGE.clickHandler), new ClickEvent(BOOKING_PAGE.name, BOOKING_PAGE.clickHandler), new ClickEvent(LOGIN_PAGE.name, LOGIN_PAGE.clickHandler), new ClickEvent(HOME_PAGE.name, HOME_PAGE.clickHandler), new ClickEvent(PROFILE_PAGE.name, PROFILE_PAGE.clickHandler)];

export { ABOUT_PAGE, BOOKING_PAGE, HOME_PAGE, LOGIN_PAGE, PROFILE_PAGE, NAVBAR_CLICK_EVENTS };
