import * as React from 'react';
import './App.css';
import MenuComp from './components/menu/MenuComp';
import NavbarComp from './components/navigation/NavBarComp'
import HomePageComp from './components/pages/homePage/HomePageComp';
import { ABOUT_PAGE, BOOKING_PAGE, HOME_PAGE, NAVBAR_CLICK_EVENTS, PAGES } from './content/Pages';
// import PageTemplate from './objects/PageTemplate'

class App extends React.Component {

  public pageRenderer(pageSelected: string): JSX.Element {
    if (pageSelected === PAGES.HOME_PAGE.url) {
      return (<HomePageComp H1PImageList={HOME_PAGE.H1PImageComponetns} />)
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
      return (<MenuComp menuButtons={HOME_PAGE.menuItems} />)
    }
    else if (pageSelected === PAGES.BOOKING_PAGE.url) {
      return (<MenuComp menuButtons={BOOKING_PAGE.menuItems} />)
    }
    else if (pageSelected === PAGES.ABOUT_PAGE.url) {
      return (<MenuComp menuButtons={ABOUT_PAGE.menuItems} />)
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
          <NavbarComp navBarButtons={NAVBAR_CLICK_EVENTS} />
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
