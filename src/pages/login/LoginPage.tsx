import * as React from "react";
import "./LoginPageStyle.css";
import LoginBox from "src/pages/login/components/loginBox/LoginBox";

class LoginPage extends React.Component<LoginProps> {
  constructor(props: any) {
    super(props);
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
