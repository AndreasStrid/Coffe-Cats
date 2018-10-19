import * as React from "react";
import "./LoginPageStyle.css";
import LoginBox from "src/pages/login/components/loginBox/LoginBox";

class LoginPage extends React.Component<LoginProps, ILoginPageState>{

  constructor(props: any) {
    super(props);
    this.state = {
      currentPage: document.location.pathname,
      password: "",
      userName: "",
    };

  }
  public render() {

    return (
      <div className="loginPage">
        <LoginBox label={this.props.label} stateNames={this.props.stateNames} />
      </div>
    );
  }

}

export default LoginPage;
