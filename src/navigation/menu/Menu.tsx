import * as React from "react";
import List from "src/components/list/List";
import "./MenuStyle.css";
import HomePage from "src/pages/homePage/HomePage";
import { HOME_PAGE } from "src/content/Pages" // ABOUT_PAGE, BOOKING_PAGE, , PROFILE_PAGE,
import { URL } from "src/content/Variables"
import { MENU_BUTTONS_ABOUT, MENU_BUTTONS_BOOKING, MENU_BUTTONS_HOME, MENU_BUTTONS_PROFILE } from "src/content/RedirectButtons";
import { SIGN_IN_PAGE, SIGN_OUT_PAGE } from "src/content/Pages"
import SignPage from "../../pages/sign/SignPage";
import ListStyle from "src/types/ListStyle"
import Storage from "src/types/Storage"
import StorageKey from "src/types/StorageKey"
import User from "src/types/User";

class Menu extends React.Component<RedirectButtonsProps, MenuState> {

  constructor(props: RedirectButtonsProps) {
    super(props);
    const user: User = Storage.getItem(StorageKey.USER);

    this.state = {
      currentUrl: Storage.getItem(StorageKey.URL),
      isSignedIn: user.isSignedIn()
    }
    this.redirect = this.redirect.bind(this);
  }
  public render() {
    this.setRedirect()

    return (
      <div className="menuGrid">
        {this.displayMenu(this.state.currentUrl)}
        <div className="contentGrid" >
          {this.pageRenderer(this.state.currentUrl)}
        </div>
      </div>
    );
  }

  public displayMenu(currentUrl: string): JSX.Element | null {
    if (currentUrl.includes(URL.SIGN)) {
      const signedStatus = "You are " + (this.state.isSignedIn ? SIGN_IN_PAGE.label : SIGN_OUT_PAGE.label)
      return <List list={[{ name: signedStatus, url: "", redirect: (noRedirect) => { noRedirect = "" } }]} style={ListStyle.MENU} />
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
    history.pushState("", "", url);
    Storage.setItem(StorageKey.URL, url);
    this.setState({ currentUrl: Storage.getItem(StorageKey.URL) })
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
  // public signPages(url: string): JSX.Element {
  //   if (url === MENU_BUTTONS_SIGN[0].url || url === URL.SIGN) {
  //     return <SignPage key="0" signInBox={SIGN_IN_PAGE} />
  //   }
  //   else if (url === MENU_BUTTONS_SIGN[1].url) {
  //     return <SignPage key="1" signInBox={SIGN_UP_PAGE} />
  //   }
  //   return <p> MENU Sign page ERROR </p>;
  // }
}

export default Menu;
