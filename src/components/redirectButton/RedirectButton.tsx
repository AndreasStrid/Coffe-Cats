import * as React from "react";

class RedirectButton extends React.Component<RedirectButtonProps> {
  constructor(props: RedirectButtonProps) {
    super(props);
    this.clickHandleRedirect = this.clickHandleRedirect.bind(this);
  }

  public render() {
    return (
      <li onClick={this.clickHandleRedirect}> {this.props.name} </li>
    );
  }
  public clickHandleRedirect(e: React.MouseEvent<HTMLElement>) {
    this.props.redirect(this.props.url);
  }
}

export default RedirectButton;
