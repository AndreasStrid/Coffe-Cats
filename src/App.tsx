import * as React from 'react';
import './App.css';

// import Box from './components/Box';
import Menu from './components/menu/Menu';
import Navbar from './components/navigation/NavBar'
import Page from './components/Page'
import { HOMEPAGE, PAGESNAMES } from './config/Variables';
import PageTemplate from './objects/PageTemplate'


// import HomePageHeaderClass from './homePage/HomePageHeaderClass';
// import HomePageHeaderStateless from './homePage/HomePageHeaderStateless';

// const menuButtons = ['Login', 'Button2', 'Button3'];
// const menuFunctions = [new Login('login').logIn, new Login('cats').logIn]

class App extends React.Component {

  public pageRenderer(pageSelected: string): PageTemplate {
    if (pageSelected === PAGESNAMES.homePage.name) {
      return HOMEPAGE;
    }
    else if (pageSelected === PAGESNAMES.aboutPage.name) {
      return HOMEPAGE;
    }
    else if (pageSelected === PAGESNAMES.bookingPage.name) {
      return HOMEPAGE;
    }
    return HOMEPAGE;
  }

  public render() {

    const page = this.pageRenderer(PAGESNAMES.homePage.name);

    return (

      <div className="appGrid">
        <div className="menuGrid">
          <p> Menu </p>
          <Menu menuButtons={page.menuItems} />
        </div>
        <div className="navBarGrid">
          <p>Navbar</p>
          <Navbar />
        </div>
        <div className="contentGrid">
          <p> Home Page</p>
          <Page />
        </div>
      </div>

    );
  }
}

export default App;
