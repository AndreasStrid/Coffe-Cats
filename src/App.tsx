import * as React from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navigation/NavBar";
import IRedirectButtonProps from "./components/redirectButton/IRedirectButtonProps";
import {
  ABOUT_PAGE,
  BOOKING_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  NAVBAR_BUTTONS,
  PROFILE_PAGE
} from "./content/Pages";
import HomePage from "./pages/homePage/HomePage";
import LoginPageComp from "./pages/login/LoginPage";

const H1PImageList = {
  H1PImageList: HOME_PAGE.H1PImageList
};

interface IState {
  currentPage: string;
}

class App extends React.Component<{}, IState> {
  constructor() {
    super({});
    this.state = { currentPage: HOME_PAGE.url };
    history.pushState("", HOME_PAGE.name, HOME_PAGE.url);

    this.redirect = this.redirect.bind(this);

    this.setUpRedirects();
  }

  public render() {
    const page = this.pageRenderer(this.state.currentPage);
    const menu = this.menuRenderer(this.state.currentPage);

    return (
      <div className="appGrid">
        <div className="navBarGrid">
          <Navbar buttons={NAVBAR_BUTTONS} />
        </div>
        <div className="menuGrid">{menu}</div>
        <div className="contentGrid">{page}</div>
      </div>
    );
  }
  public pageRenderer(pageSelected: string): JSX.Element {
    if (pageSelected === HOME_PAGE.url) {
      return <HomePage child={H1PImageList} />;
      // <HomePage H1PImageList={HOME_PAGE.H1PImageComponetns} />;
    } else if (pageSelected === LOGIN_PAGE.url) {
      return <LoginPageComp />;
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
    if (pageSelected === ABOUT_PAGE.url) {
      return <Menu buttons={ABOUT_PAGE.menuButtons} />;
    } else if (pageSelected === BOOKING_PAGE.url) {
      return <Menu buttons={BOOKING_PAGE.menuButtons} />;
    } else if (pageSelected === HOME_PAGE.url) {
      return <Menu buttons={HOME_PAGE.menuButtons} />;
    } else if (pageSelected === LOGIN_PAGE.url) {
      return <Menu buttons={LOGIN_PAGE.menuButtons} />;
    } else if (pageSelected === PROFILE_PAGE.url) {
      return <Menu buttons={PROFILE_PAGE.menuButtons} />;
    }
    return <p>dd</p>;
  }
  public setUpRedirects(): void {
    NAVBAR_BUTTONS.map((item: IRedirectButtonProps) => {
      item.redirect = this.redirect;
    });
  }

  public redirect(name: string, url: string): void {
    history.pushState("", name, url);
    this.setState({ currentPage: document.location.pathname });
  }
}

export default App;
