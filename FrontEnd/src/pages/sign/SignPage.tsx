import * as React from "react";
import "./SignPageStyle.css";
import SignInBox from "./components/signInBox/SignInBox";
import { SIGN_IN_PAGE, SIGN_UP_PAGE, SIGN_OUT_PAGE } from "src/content/Pages"

import SignOutBox from "./components/signOutBox/SignOutBox";
import UserService from "src/services/UserService";

class SignPage extends React.Component<{}, SignPageState> {
  constructor(props: any) {
    super(props);
    this.switchSignBox = this.switchSignBox.bind(this);

    this.state = {
      isSignedIn: UserService.isSignedIn(SignPage.name),
      isSignedUp: false
    }
  }
  public render() {
    return (
      <div className="signPage">
        {this.renderSignPage(this.state.isSignedIn)}
      </div>
    );
  }

  public renderSignPage(isSignedIn: boolean): JSX.Element {
    if (isSignedIn) {
      return <SignOutBox label={SIGN_OUT_PAGE.label} />
    }
    else {
      return this.state.isSignedUp ?
        <SignInBox key={SIGN_IN_PAGE.label} label={SIGN_IN_PAGE.label} oppositeLabel={SIGN_UP_PAGE.label} stateNames={SIGN_IN_PAGE.stateNames} switchSignBox={this.switchSignBox} /> :
        <SignInBox key={SIGN_UP_PAGE.label} label={SIGN_UP_PAGE.label} oppositeLabel={SIGN_IN_PAGE.label} stateNames={SIGN_UP_PAGE.stateNames} switchSignBox={this.switchSignBox} />
    }
  }
  public switchSignBox() {
    this.setState({ isSignedUp: !this.state.isSignedUp })
  }
}

export default SignPage;
