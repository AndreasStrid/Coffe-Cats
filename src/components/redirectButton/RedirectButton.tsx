import * as React from "react";
import IRedirectButtonProps from "src/components/redirectButton/IRedirectButtonProps";
import "../../App.css";

class RedirectButton extends React.Component<IRedirectButtonProps> {
  constructor(props: IRedirectButtonProps) {
    super(props);
    this.clickHandleRedirect = this.clickHandleRedirect.bind(this);
  }

  public render() {
    return (
      <li onClick={this.clickHandleRedirect}> {this.props.name} </li>
    );
  }
  public clickHandleRedirect(e: React.MouseEvent<HTMLElement>) {
    this.props.redirect(this.props.name, this.props.url);
  }
}

export default RedirectButton;
