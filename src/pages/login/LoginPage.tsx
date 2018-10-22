import * as React from "react";
import "./LoginPageStyle.css";
import LoginBox from "src/pages/login/components/loginBox/LoginBox";

class LoginPage extends React.Component<LoginProps, LoginPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentPage: document.location.pathname,
      password: "",
      userName: ""
    };
  }
  public render() {
    return (
      <div className="loginPage">
        <LoginBox
          label={this.props.loginBox.label}
          stateNames={this.props.loginBox.stateNames}
        />
      </div>
    );
  }
}

export default LoginPage;
