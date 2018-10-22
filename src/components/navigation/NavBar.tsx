import * as React from "react";
// import List from "../list/List";
import "./NavBarStyle.css";
import List from "../list/List";
import Route from "src/pages/Route";
// import Menu from "../menu/Menu";
// ListStyle.NAVBAR

class Navbar extends Route<INavBarProps> {
  constructor(props: INavBarProps) {
    super(props);
    console.log("Navbar props: ", props);
  }
  // ListStyle.NAVBAR
  public render() {
    return (
      <div>
        <div className={"navBar"}>
          <List list={this.props.buttons} style={"n "} />;
        </div>
        <div className="menuGrid">
          {this.pageRenderer(this.props.currentUrl)}
        </div>
      </div>
    );
  }
}

export default Navbar;
