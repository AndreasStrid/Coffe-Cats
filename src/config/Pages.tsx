import ClickEvent from '../objects/ClickEvent';
import Login from '../objects/login/Login'
import PageTemplate from '../objects/PageTemplate';
import { PAGESNAMES } from './Variables'

const aboutPageClickEvents = [new ClickEvent(PAGESNAMES.aboutPage.name, new Login('About').logIn)];
const bookingPageClickEvents = [new ClickEvent(PAGESNAMES.bookingPage.name, new Login('Booking').logIn)];
const homePageClickEvents = [new ClickEvent(PAGESNAMES.homePage.name, new Login('Home').logIn)];

const ABOUTPAGE = new PageTemplate(PAGESNAMES.aboutPage.name, PAGESNAMES.aboutPage.url, aboutPageClickEvents);
const BOOKINGPAGE = new PageTemplate(PAGESNAMES.bookingPage.name, PAGESNAMES.bookingPage.url, bookingPageClickEvents);
const HOMEPAGE = new PageTemplate(PAGESNAMES.homePage.name, PAGESNAMES.homePage.url, homePageClickEvents);

const NAVBARCLICKEVENTS = [new ClickEvent(ABOUTPAGE.name, ABOUTPAGE.redirect), new ClickEvent(BOOKINGPAGE.name, BOOKINGPAGE.redirect), new ClickEvent(HOMEPAGE.name, HOMEPAGE.redirect)];

export { ABOUTPAGE, BOOKINGPAGE, HOMEPAGE, NAVBARCLICKEVENTS, PAGESNAMES };
