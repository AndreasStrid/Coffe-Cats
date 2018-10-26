import * as React from "react";
import "./SignPageStyle.css";
import SignInBox from "./components/signInBox/SignInBox";
import { SIGN_IN_PAGE, SIGN_UP_PAGE, SIGN_OUT_PAGE } from "src/content/Pages"
import Storage from "src/types/Storage"
import StorageKey from "src/types/StorageKey"
import User from "src/types/User";
import SignOutBox from "./components/signOutBox/SignOutBox";

class SignPage extends React.Component<{}, SignedInState> {
  constructor(props: any) {

    const user: User = Storage.getItem(StorageKey.USER)

    super(props);
    this.state = {
      isSignedIn: user.isSignedIn()
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
      return <div className={"signBoxGrid"}>
        <SignInBox key={SIGN_IN_PAGE.label} label={SIGN_IN_PAGE.label} stateNames={SIGN_IN_PAGE.stateNames} />
        <SignInBox key={SIGN_UP_PAGE.label} label={SIGN_UP_PAGE.label} stateNames={SIGN_UP_PAGE.stateNames} />
      </div>
    }

  }
}

export default SignPage;
