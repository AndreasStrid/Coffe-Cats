import * as React from "react";
import "src/components/navigation/NavBarStyle.css";
import "src/components/menu/MenuStyle.css";
import RedirectButton from "../redirectButton/RedirectButton";

class List extends React.Component<ListProps> {
  public render() {
    return (
      <div className={this.props.style}>
        {this.createItemList(this.props.list)}
      </div>
    );
  }
  public createItemList(list: RedirectButtonProps[]): JSX.Element {
    const listElement = list.map((item: RedirectButtonProps) => {
      return (
        <RedirectButton
          redirect={item.redirect}
          name={item.name}
          url={item.url}
          key={item.name}
        />
      );
    });
    return <ul> {listElement} </ul>;
  }
}

export default List;
