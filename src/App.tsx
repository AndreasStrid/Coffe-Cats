import * as React from 'react';
// import { Route, Router } from 'react-router';
import './App.css';

// import Box from './components/Box';
import Menu from './components/menu/Menu';
import Navbar from './components/navigation/NavBar'
import PageContent from './components/PageContent'
import { ABOUTPAGE, BOOKINGPAGE, HOMEPAGE, NAVBARCLICKEVENTS, PAGESNAMES } from './config/Pages';
import PageTemplate from './objects/PageTemplate'


// import HomePageHeaderClass from './homePage/HomePageHeaderClass';
// import HomePageHeaderStateless from './homePage/HomePageHeaderStateless';

// const menuButtons = ['Login', 'Button2', 'Button3'];
// const menuFunctions = [new Login('login').logIn, new Login('cats').logIn]

class App extends React.Component {

  public pageRenderer(pageSelected: string): PageTemplate {
    if (pageSelected === PAGESNAMES.homePage.url) {
      return HOMEPAGE;
    }
    else if (pageSelected === PAGESNAMES.aboutPage.url) {
      return ABOUTPAGE;
    }
    else if (pageSelected === PAGESNAMES.bookingPage.url) {
      return BOOKINGPAGE;
    }
    return new PageTemplate('', '', []);
  }

  public render() {

    const page = this.pageRenderer(document.location.pathname);

    return (

      <div className="appGrid">
        <div className="navBarGrid">
          <p>Navbar</p>
          <Navbar navBarButtons={NAVBARCLICKEVENTS} />
        </div>
        <div className="menuGrid">
          <p> Menu </p>
          <Menu menuButtons={page.menuItems} />
        </div>
        <div className="contentGrid">
          <p> PageContent </p>
          <PageContent />
        </div>
      </div>

    );
  }
}

export default App;
