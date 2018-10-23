import * as React from "react";
import List from "src/components/list/List";
import "./MenuStyle.css";
import HomePage from "src/pages/homePage/HomePage";
import { HOME_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE } from "src/content/Pages" // ABOUT_PAGE, BOOKING_PAGE, , PROFILE_PAGE,
import { URL } from "src/content/Variables"
import { MENU_BUTTONS_ABOUT, MENU_BUTTONS_BOOKING, MENU_BUTTONS_HOME, MENU_BUTTONS_PROFILE, MENU_BUTTONS_SIGN } from "../../content/RedirectButtons";
import LoginPage from "../../pages/login/LoginPage";
import ListStyle from "src/content/types/ListStyle"

class Menu extends React.Component<RedirectButtonsProps, RouteState> {
  constructor(props: RedirectButtonsProps) {
    super(props);
    this.state = {
      currentUrl: this.props.currentUrl
    }
    this.redirect = this.redirect.bind(this);

  }
  public render() {
    this.setRedirect()
    const page = this.pageRenderer(this.state.currentUrl);
    return (
      <div className="menuGrid">
        <List list={this.props.buttons} style={ListStyle.MENU} />
        <div className="contentGrid" >
          {page}
        </div>
      </div>
    );
  }

  public setRedirect() {
    this.props.buttons.map((button: RedirectButtonProps) => {
      button.redirect = this.redirect;
    })
  }
  public redirect(url: string): void {
    history.pushState("", "", url);
    this.setState({ currentUrl: url })
  }
  public pageRenderer(currentUrl: string): JSX.Element {
    if (currentUrl.includes(URL.ABOUT)) {
      return this.aboutPages(currentUrl);
    }
    else if (currentUrl.includes(URL.BOOKING)) {
      return this.bookingPages(currentUrl);
    }
    else if (currentUrl.includes(URL.HOME)) {
      return this.homePages(currentUrl);
    }
    else if (currentUrl.includes(URL.PROFILE)) {
      return this.profilePages(currentUrl);
    }
    else if (currentUrl.includes(URL.SIGN)) {
      return this.signPages(currentUrl);
    }
    return <p> MENU ERROR </p>;
  }
  public aboutPages(url: string): JSX.Element {
    if (url === MENU_BUTTONS_ABOUT[0].url) {
      return <p> ABOUT PAGE </p>
    }
    return <p> MENU About page ERROR </p>;

  }
  public bookingPages(url: string): JSX.Element {
    if (url === MENU_BUTTONS_BOOKING[0].url) {
      return <p> ABOUT PAGE </p>
    }
    return <p> MENU Booking page ERROR </p>;

  }
  public homePages(url: string): JSX.Element {
    if (url === MENU_BUTTONS_HOME[0].url) {
      return <HomePage H1PImageList={HOME_PAGE} />
    }
    return <p> MENU Home ERROR </p>;

  }
  public profilePages(url: string): JSX.Element {
    if (url === MENU_BUTTONS_PROFILE[0].url) {
      return <p> ABOUT PAGE </p>
    }
    return <p> MENU Profile page ERROR </p>;

  }
  public signPages(url: string): JSX.Element {
    if (url === MENU_BUTTONS_SIGN[0].url || url === URL.SIGN) {
      return <LoginPage key="0" loginBox={SIGN_IN_PAGE} />
    }
    else if (url === MENU_BUTTONS_SIGN[1].url) {
      return <LoginPage key="1" loginBox={SIGN_UP_PAGE} />
    }
    return <p> MENU Sign page ERROR </p>;
  }
}

export default Menu;
