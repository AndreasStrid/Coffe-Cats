import * as React from "react";
import { LOGIN_PAGE, REGISTER_PAGE } from "../../content/Pages";
import IPage from "../IPage";
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
      userName: "",
    };

  }
  public render() {
    const page = this.pageRenderer(this.state.currentPage)
    return (
      <div className="loginPage">
        {page}
      </div>
    );
  }
  public pageRenderer(pageSelected: string): JSX.Element {
    if (pageSelected === LOGIN_PAGE.url) {
      return <LoginBox label={LOGIN_PAGE.content.label} stateNames={LOGIN_PAGE.content.stateNames} />
    } else if (pageSelected === REGISTER_PAGE.url) {
      return <LoginBox label={REGISTER_PAGE.content.label} stateNames={REGISTER_PAGE.content.stateNames} />
    }
    return <p> {this.RENDER_PAGE_ERROR} </p>;
  }
  public redirect(pageName: string, url: string): void {
    history.pushState("", pageName, url);
    this.setState({ currentPage: document.location.pathname });
  }
}

export default LoginPage;
