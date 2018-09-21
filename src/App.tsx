import * as React from 'react';
import './App.css';
import MenuComp from './components/menu/MenuComp';
import NavbarComp from './components/navigation/NavBarComp'
import HomePageComp from './components/pages/homePage/HomePageComp';
import { ABOUT_PAGE, BOOKING_PAGE, HOME_PAGE, NAVBAR_CLICK_EVENTS, PAGES } from './content/Pages';
// import PageTemplate from './objects/PageTemplate'

interface IState {
  currentPage: string;
}

class App extends React.Component<{}, IState> {

  constructor() {
    super({});
    this.state = { currentPage: '' };

    this.redirect = this.redirect.bind(this);
    ABOUT_PAGE.setRedirect(this.redirect);
    BOOKING_PAGE.setRedirect(this.redirect);
    HOME_PAGE.setRedirect(this.redirect);
  }
  public render() {

    const page = this.pageRenderer(this.state.currentPage);
    const menu = this.menuRenderer(this.state.currentPage);

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

  public redirect(name: string, url: string): void {
    history.pushState('', name, url);
    this.setState({ currentPage: document.location.pathname });
  }

  public pageRenderer(pageSelected: string): JSX.Element {
    if (pageSelected === PAGES.HOME_PAGE.url) {
      // HOME_PAGE.setRedirect(this.redirect);
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


}

export default App;
