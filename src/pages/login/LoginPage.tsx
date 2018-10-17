import * as React from "react";
import { SIGN_IN_PAGE, SIGN_UP_PAGE } from "src/content/Pages";
import { URL } from "src/content/Variables";
import LoginBox from "./components/loginBox/LoginBox";
import "./LoginPageStyle.css";

class LoginPage extends React.Component<{}, ILoginPageState>
  implements IPage {
  public RENDER_PAGE_ERROR: "Couldn't render this page";

  constructor(props: any) {
    super(props);
    this.state = {
      currentPage: document.location.pathname,
      password: "",
      userName: ""
    };
  }
  public render() {
    const page = this.pageRenderer(this.state.currentPage);
    return <div className="loginPage">{page}</div>;
  }
  public pageRenderer(pageSelected: string): JSX.Element {
    if (pageSelected === URL.SIGN_IN) {
      return (
        <LoginBox
          label={SIGN_IN_PAGE.label}
          stateNames={SIGN_IN_PAGE.stateNames}
        />
      );
    } else if (pageSelected === URL.SIGN_IN) {
      return (
        <LoginBox
          label={SIGN_UP_PAGE.label}
          stateNames={SIGN_UP_PAGE.stateNames}
        />
      );
    }
    return <p> {this.RENDER_PAGE_ERROR} </p>;
  }
  public redirect(pageName: string, url: string): void {
    history.pushState("", pageName, url);
    this.setState({ currentPage: document.location.pathname });
  }
}

export default LoginPage;
