import * as React from "react";
import List from "../list/List";
import "./MenuStyle.css";

class Menu extends React.Component<IRedirectButtonsProps> {
  public render() {
    console.log(" LIST ", this.props.buttons);
    return <List list={this.props.buttons} style={"menu"} />;
  }
}

export default Menu;
