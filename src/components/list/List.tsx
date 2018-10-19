import * as React from "react";
import "../../App.css";
import RedirectButton from "../redirectButton/RedirectButton";

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
        <li key={item.name}>
          <Link to={item.url}> {item.name} </Link>
        </li>
      );
    });
    return <ul> {listElement} </ul>;
  }
}

export default List;
