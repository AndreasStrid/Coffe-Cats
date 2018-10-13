import * as React from "react";
import IRedirectButtonProps from "src/components/redirectButton/IRedirectButtonProps";
import "../../App.css";
import RedirectButton from "../redirectButton/RedirectButton";
import IListProps from "./IListProps";

class List extends React.Component<IListProps> {
  public render() {
    return (
      <div className={this.props.style}>
        {this.createItemList(this.props.list)}
      </div>
    );
  }
  public createItemList(list: IRedirectButtonProps[]): JSX.Element {
    const listElement = list.map((item: IRedirectButtonProps) => {
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
