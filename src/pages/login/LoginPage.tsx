import * as React from "react";
import LoginPageState from "./ILoginPageState";
import "./LoginPageStyle.css";

class LoginPage extends React.Component<{}, LoginPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      password: "",
      userName: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  public render() {
    return (
      <div className="loginPage">
        <form onSubmit={this.handleSubmit}>
          <input
            id="userName"
            value={this.state.userName}
            type="text"
            onChange={this.handleOnChange}
          />
          <input
            id="password"
            value={this.state.password}
            type="text"
            onChange={this.handleOnChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
  public createLoginPage() {
    // if (this.state.user.isLoggedIn()) {
    //   return <p> creteLoginPage </p>;
    // }
    // return <p> NOT LOGIN </p>;
  }
  public handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // tslint:disable-next-line:no-console
    console.log("hej");
    // this.state.user.login(this.state.name, this.state.password);
  }
  public handleOnChange(event: React.ChangeEvent) {
    // @ts-ignore these can never be null, use ignore to save code
    this.setState({ [event.target.id]: event.target.value });
  }
}

export default LoginPage;
