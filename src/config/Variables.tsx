import ClickEvent from '../objects/ClickEvent';
import Login from '../objects/login/Login'
import Page from '../objects/PageTemplate';

const PAGESNAMES = {
    aboutPage: { name: 'About', url: '/about' },
    bookingPage: { name: 'Booking', url: '/booking' },
    homePage: { name: 'HomePage', url: '/homePage' }
};

const clickEvents = [new ClickEvent('Login', new Login('login').logIn), new ClickEvent('Button2', new Login('cats').logIn)];
const HOMEPAGE = new Page(PAGESNAMES.homePage.name, clickEvents);

export { PAGESNAMES, HOMEPAGE };
