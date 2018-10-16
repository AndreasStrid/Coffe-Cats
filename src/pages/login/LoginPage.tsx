import * as React from "react";
import IPage from "../../interfaces/IPage";
import LoginPageState from "./ILoginPageState";
import "./LoginPageStyle.css";
import { LOGIN_PAGE, REGISTER_PAGE } from "../../content/Pages";

class LoginPage extends React.Component<{}, LoginPageState>
  implements IPage {
  constructor(props: any) {
    super(props);
    this.state = {
      password: "",
      userName: "",
      currentPage: document.location.pathname
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  public render() {
    return (
      <div className="loginPage">
        <form className="loginBox" onSubmit={this.handleSubmit}>
          <h1> Login </h1>
          {this.renderInputBox("UserName", "userName")}
          {this.renderInputBox("Password", "password")}
          <div>
            <button type="submit" onClick={this.handleSubmit}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
  public pageRenderer(pageSelected: string): JSX.Element {
    if (pageSelected === LOGIN_PAGE.url) {
    } else if (pageSelected === REGISTER_PAGE.url) {
    }
  }
  public redirect(pageName: string, url: string): void {
    history.pushState("", pageName, url);
    this.setState({ currentPage: document.location.pathname });
  }

  public renderInputBox(label: string, id: string) {
    return (
      <div>
        <div>
          <label>{label}</label>
        </div>
        <input
          id={id}
          placeholder={label}
          value={this.state[id]}
          type="text"
          onChange={this.handleOnChange}
          required={true}
        />
      </div>
    );
  }
  public handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // tslint:disable-next-line:no-console
    console.log("hej");
    // this.state.user.login(this.state.name, this.state.password);
  }

  public apalapa() {
    return "apalapa";
  }

  public createLoginPage() {
    // if (this.state.user.isLoggedIn()) {
    //   return <p> creteLoginPage </p>;
    // }
    // return <p> NOT LOGIN </p>;
  }

  public inputMustBeApa(element: any) {
    if (element.value !== "apa") {
      element.setCustomValidity("You input must be apa");
    } else {
      element.setCustomValidity("");
    }
  }

  public handleOnChange(event: any) {
    this.inputMustBeApa(event.target);
    // @ts-ignore these can never be null, use ignore to save code
    this.setState({ [event.target.id]: event.target.value });
  }
}

export default LoginPage;
