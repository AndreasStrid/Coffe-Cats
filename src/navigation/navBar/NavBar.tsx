import * as React from "react";
import "./NavBarStyle.css";
import List from "src/components/list/List";
import { MENU_BUTTONS_ABOUT, MENU_BUTTONS_BOOKING, MENU_BUTTONS_HOME, MENU_BUTTONS_PROFILE, MENU_BUTTONS_SIGN } from "src/content/RedirectButtons"
import Menu from "../menu/Menu";
import ListStyle from "src/types/ListStyle";

class Navbar extends React.Component<NavBarProps, RouteState> {
  constructor(props: NavBarProps) {
    super(props);
    this.state = {
      currentUrl: this.props.currentUrl,
    }
    this.redirect = this.redirect.bind(this);

  }

  public render() {
    this.setRedirect()
    const menu = this.menuRenderer(this.state.currentUrl);

    return (
      <div className="navBarGrid">
        <div className="languages">
          <div>
            {this.props.swe}
          </div>
          <div>
            {this.props.eng}
          </div>
        </div>
        <List list={this.props.buttons} style={ListStyle.NAVBAR} />
        {menu}
      </div>
    );
  }

  public menuRenderer(currentUrl: string): JSX.Element {
    console.log(" NavBar Rendered ", currentUrl)
    if (currentUrl.includes(this.props.buttons[0].url)) {
      return <Menu key="0" buttons={MENU_BUTTONS_ABOUT} currentUrl={currentUrl} />
    }
    else if (currentUrl.includes(this.props.buttons[1].url)) {
      return <Menu key="1" buttons={MENU_BUTTONS_BOOKING} currentUrl={currentUrl} />
    }
    else if (currentUrl.includes(this.props.buttons[2].url)) {
      return <Menu key="2" buttons={MENU_BUTTONS_HOME} currentUrl={currentUrl} />
    }
    else if (currentUrl.includes(this.props.buttons[3].url)) {
      return <Menu key="3" buttons={MENU_BUTTONS_PROFILE} currentUrl={currentUrl} />
    }
    else if (currentUrl.includes(this.props.buttons[4].url)) {
      return <Menu key="4" buttons={MENU_BUTTONS_SIGN} currentUrl={currentUrl} />
    }
    return <p> menuRenderer ERROR </p>

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
}

export default Navbar;
