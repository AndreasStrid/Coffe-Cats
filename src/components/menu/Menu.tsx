import * as React from "react";
import List from "../list/List";
import "./MenuStyle.css";
import Route from "src/pages/Route";
// ListStyle.MENU
class Menu extends Route<INavBarProps> {
  public render() {
    return (
      <div>
        <div className={"menu"}>
          <List list={this.props.buttons} style={"m"} />;
        </div>
        <div className="contentGrid">
          {this.pageRenderer(this.props.currentUrl)}
        </div>
      </div>
    );
  }
}

export default Menu;
