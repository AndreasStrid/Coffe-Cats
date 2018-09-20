import * as React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Navbar from './components/navigation/NavBar'
import HomePage from './components/pages/HomePage';
import { ABOUT_PAGE, BOOKING_PAGE, HOME_PAGE, NAVBAR_CLICK_EVENTS, PAGES } from './config/Pages';
// import PageTemplate from './objects/PageTemplate'

class App extends React.Component {

  public pageRenderer(pageSelected: string): JSX.Element {
    if (pageSelected === PAGES.HOME_PAGE.url) {
      return (<HomePage H1PImageList={HOME_PAGE.H1PImageComponetns} />)
    }
    // else if (pageSelected === PAGES.ABOUT_PAGE.url) {
    //   return ABOUT_PAGE;
    // }
    // else if (pageSelected === PAGES.BOOKING_PAGE.url) {
    //   return BOOKING_PAGE;
    // }
    return <p>dd</p>;
  }

  public menuRenderer(pageSelected: string): JSX.Element {
    if (pageSelected === PAGES.HOME_PAGE.url) {
      return (<Menu menuButtons={HOME_PAGE.menuItems} />)
    }
    else if (pageSelected === PAGES.BOOKING_PAGE.url) {
      return (<Menu menuButtons={BOOKING_PAGE.menuItems} />)
    }
    else if (pageSelected === PAGES.ABOUT_PAGE.url) {
      return (<Menu menuButtons={ABOUT_PAGE.menuItems} />)
    }
    return <p>dd</p>;
  }

  public render() {

    const currentPage = document.location.pathname;
    const page = this.pageRenderer(currentPage);
    const menu = this.menuRenderer(currentPage);

    return (
      <div className="appGrid">
        <div className="navBarGrid">
          <p>Navbar</p>
          <Navbar navBarButtons={NAVBAR_CLICK_EVENTS} />
        </div>
        <div className="menuGrid">
          {menu}
        </div>
        <div className="contentGrid">
          {page}
        </div>
      </div>

    );
  }
}

export default App;
