import * as React from "react";
import "./NavBarStyle.css";
import List from "src/components/list/List";
import { MENU_BUTTONS_ABOUT, MENU_BUTTONS_BOOKING, MENU_BUTTONS_HOME, MENU_BUTTONS_PROFILE, NAVBAR_BUTTONS } from "src/content/RedirectButtons"
import Menu from "../menu/Menu";
import ListStyle from "src/types/ListStyle";
import Storage from "src/types/Storage"
import StorageKey from "src/types/StorageKey"
import Routing from "src/navigation/Routing";
import { SIGN_OUT_PAGE, SIGN_IN_PAGE } from "src/content/Pages";
import RedirectButton from "../redirectButton/RedirectButton";
import UserService from "src/services/UserService";

class Navbar extends React.Component<NavBarProps, SignedInState> {
  constructor(props: NavBarProps) {
    super(props);
    this.redirect = this.redirect.bind(this);

    this.state = {
      isSignedIn: UserService.isSignedIn()
    }
  }

  public render() {
    this.setRedirect()
    const menu = this.menuRenderer(Storage.getItem(StorageKey.URL));

    const NavBarButtons: RedirectButtonProps[] = [];
    NAVBAR_BUTTONS.forEach((element) => { NavBarButtons.push(element); })
    if (!this.state.isSignedIn) { NavBarButtons.splice(3, 1) }

    return (
      <div className="navBarGrid">

        <div className="signStatus">
          <RedirectButton name={"You are " + (this.state.isSignedIn ? SIGN_IN_PAGE.label : SIGN_OUT_PAGE.label)}
            url={NAVBAR_BUTTONS[4].url}
            redirect={NAVBAR_BUTTONS[4].redirect} />

        </div>

        <div className="languages">
          <div>
            {this.props.swe}
          </div>
          <div>
            {this.props.eng}
          </div>
        </div>
        <List list={NavBarButtons} style={ListStyle.NAVBAR} />
        {menu}
      </div>
    );
  }

  public menuRenderer(currentUrl: string): JSX.Element {
    console.log(" NavBar Rendered ", currentUrl)
    if (currentUrl.includes(NAVBAR_BUTTONS[0].url)) {
      return <Menu key="0" buttons={MENU_BUTTONS_ABOUT} />
    }
    else if (currentUrl.includes(NAVBAR_BUTTONS[1].url)) {
      return <Menu key="1" buttons={MENU_BUTTONS_BOOKING} />
    }
    else if (currentUrl.includes(NAVBAR_BUTTONS[2].url)) {
      return <Menu key="2" buttons={MENU_BUTTONS_HOME} />
    }
    else if (currentUrl.includes(NAVBAR_BUTTONS[3].url)) {
      return <Menu key="3" buttons={MENU_BUTTONS_PROFILE} />
    }
    else if (currentUrl.includes(NAVBAR_BUTTONS[4].url)) {
      return <Menu key="4" buttons={[]} />
    }
    return <p> menuRenderer ERROR </p>

  }
  public setRedirect() {
    NAVBAR_BUTTONS.map((button: RedirectButtonProps) => {
      button.redirect = this.redirect;
    })
  }
  public redirect(url: string): void {
    Routing.redirect(url);
    this.forceUpdate();
  }
}

export default Navbar;
