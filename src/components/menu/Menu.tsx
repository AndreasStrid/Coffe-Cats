import * as React from "react";
import IButtonsProps from "src/components/redirectButton/IRedirectButtonsProps";
import { ListStyle } from "../../content/Variables";
import List from "../list/List";
import "./MenuStyle.css";

class Menu extends React.Component<IButtonsProps> {
  public render() {
    return <List list={this.props.buttons} style={ListStyle.MENU} />;
  }
}

export default Menu;
