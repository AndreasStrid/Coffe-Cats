import * as React from "react";
import IRedirectButtonsProps from "src/components/redirectButton/IRedirectButtonsProps";
import { ListStyle } from "../../content/Variables";
import List from "../list/List";
import "./NavBarStyle.css";

class Navbar extends React.Component<IRedirectButtonsProps> {
  constructor(props: IRedirectButtonsProps) {
    super(props);
  }

  public render() {
    return <List list={this.props.buttons} style={ListStyle.NAVBAR} />;
  }
}

export default Navbar;
