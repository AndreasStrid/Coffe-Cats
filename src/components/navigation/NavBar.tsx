import * as React from "react";
// import List from "../list/List";
import "./NavBarStyle.css";
import MENU_BUTTONS from "../../content/MenuButtons";
import { Route, Link } from "react-router-dom";
// import Menu from "../menu/Menu";
// ListStyle.NAVBAR
class Navbar extends React.Component<IRedirectButtonsProps> {
  constructor(props: IRedirectButtonsProps) {
    super(props);
    console.log("Navbar props: ", props);
  }

  public render() {
    return (
      <div>
        <div className={"navBar"}>
          {this.createItemList(this.props.buttons)}
        </div>
        <div className="menuGrid">{this.menu()}</div>
      </div>
    );
  }
  public createItemList(list: IRedirectButtonProps[]): JSX.Element {
    const listElement = list.map((item: IRedirectButtonProps) => {
      return (
        <li key={item.name}>
          <Link to={item.url}> {item.name} </Link>
        </li>
      );
    });
    return <ul> {listElement} </ul>;
  }

  public menu() {
    console.log("Menu 0: ", MENU_BUTTONS[0]);
    return (
      <div>
        <Route
          exact={true}
          path={this.props.buttons[0].url}
          // @ts-ignore
          component={<p> HEj </p>}
        />
        {/* <Route
          exact={true}
          path={this.props.buttons[2].url}
          // @ts-ignore
          component={<Menu buttons={MENU_BUTTONS[2]} />}
        /> */}
      </div>
    );
  }
}

export default Navbar;
