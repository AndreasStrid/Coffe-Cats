import * as React from "react";
import List from "src/components/list/List";
import "./MenuStyle.css";
import HomePage from "src/pages/homePage/HomePage";
import { HOME_PAGE } from "src/content/Pages" // ABOUT_PAGE, BOOKING_PAGE, , PROFILE_PAGE,
import { URL } from "src/content/Variables"
import { MENU_BUTTONS_ABOUT, MENU_BUTTONS_BOOKING } from "src/content/RedirectButtons";
import SignPage from "../../pages/sign/SignPage";
import ListStyle from "src/types/ListStyle"
import Routing from "../Routing";
import ProfilePage from "src/pages/profile/ProfilePage";
import UserService from "src/services/UserService";
import ProductPage from "src/pages/product/ProductPage";

class Menu extends React.Component<RedirectButtonsProps, SignedInState> {

  constructor(props: RedirectButtonsProps) {
    super(props);

    this.state = {
      isSignedIn: UserService.isSignedIn(Menu.name)
    }
    this.redirect = this.redirect.bind(this);
  }
  public render() {
    this.setRedirect()
    return (
      <div className="menuGrid">
        {this.displayMenu(Routing.getCurrentUrl())}
        <div className="contentGrid" >
          {this.pageRenderer(Routing.getCurrentUrl())}
        </div>
      </div>
    );
  }

  public displayMenu(currentUrl: string): JSX.Element | null {
    if (currentUrl.includes(URL.SIGN)) {
      // const signedStatus = "You are " + (this.state.isSignedIn ? SIGN_IN_PAGE.label : SIGN_OUT_PAGE.label)
      // return <List list={[{ name: signedStatus, url: "", redirect: (noRedirect) => { noRedirect = "" } }]} style={ListStyle.MENU} />
      return <List list={this.props.buttons} style={ListStyle.MENU} />;
    } else {
      return <List list={this.props.buttons} style={ListStyle.MENU} />;
    }
  }

  public setRedirect() {
    this.props.buttons.map((button: RedirectButtonProps) => {
      button.redirect = this.redirect;
    })
  }
  public redirect(url: string): void {
    Routing.redirect(url);
    this.forceUpdate();
  }
  public pageRenderer(currentUrl: string): JSX.Element {
    if (currentUrl.includes(URL.ABOUT)) {
      return this.aboutPages(currentUrl);
    }
    else if (currentUrl.includes(URL.BOOKING)) {
      return <ProductPage />
    }
    else if (currentUrl.includes(URL.HOME)) {
      return <HomePage H1PImageList={HOME_PAGE} />
    }
    else if (currentUrl.includes(URL.PROFILE)) {
      return <ProfilePage />;
    }
    else if (currentUrl.includes(URL.SIGN)) {
      return <SignPage key="0" />
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
}

export default Menu;
