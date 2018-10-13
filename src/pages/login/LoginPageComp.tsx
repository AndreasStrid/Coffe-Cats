import * as React from "react";
import UserObj from "../../objects/UserObj";
import "./LoginPageStyle.css";

interface IProps {
  user: UserObj;
}

interface IState {
  user: UserObj;
  name: string;
  password: string;
}

class LoginPageComp extends React.Component<IProps, IState> {
  // <IProps>

  constructor(props: IProps) {
    super(props);
    this.state = { user: this.props.user, name: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  public render() {
    return (
      <div className="loginPage">
        <form onSubmit={this.handleSubmit}>
          <input
            id="name"
            value={this.state.name}
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

        {this.createLoginPage()}
      </div>
    );
  }
  public createLoginPage(): JSX.Element {
    if (this.state.user.isLoggedIn()) {
      return <p> creteLoginPage </p>;
    }
    return <p> NOT LOGIN </p>;
  }
  public handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // tslint:disable-next-line:no-console
    console.log("hej");
    this.state.user.login(this.state.name, this.state.password);
  }
  public handleOnChange(event: React.ChangeEvent) {
    // React.ChangeEvent
    // event.preventDefault();
    const inputName = event.target.id;
    // @ts-ignore
    const value = document.getElementById(inputName).value;
    // tslint:disable-next-line:no-console
    console.log(inputName + " " + value);
    if (value != null && inputName === "name") {
      this.setState({ name: value });
    } else if (value != null && inputName === "password") {
      this.setState({ [inputName]: value });
    }
  }
}

export default LoginPageComp;
