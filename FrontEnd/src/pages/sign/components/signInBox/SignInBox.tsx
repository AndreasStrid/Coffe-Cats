import * as React from "react";
import StorageKey from "src/types/StorageKey";
import User from "src/types/User";
import Storage from "src/types/Storage";
import Routing from "src/navigation/Routing";
import SUCCESS from "src/content/messages/Successes"

class SignInBox extends React.Component<SignInBoxProps, SignInBoxState> {
  constructor(props: any) {
    super(props);
    this.state = {
      password: "",
      userName: "",
      loginMessage: "",
    };
    console.log("SignInBox props: ", JSON.stringify(this.props));
    console.log("SignInBox state: ", JSON.stringify(this.state));

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  public render() {
    return (
      <form className="signBox" onSubmit={this.handleSubmit}>
        <div>
          <h1> {this.props.label} </h1>
        </div>

        <div>
          <label> {this.props.stateNames[0]}</label>
        </div>
        <div>
          <input
            id={'userName'}
            placeholder={this.props.stateNames[0]}
            value={this.state.userName}
            type="text"
            onChange={this.handleOnChange}
            required={true}
          />
        </div>

        <div>
          <label> {this.props.stateNames[1]}</label>
        </div>
        <div>
          <input
            id={'password'}
            placeholder={this.props.stateNames[1]}
            value={this.state.password}
            type="text"
            onChange={this.handleOnChange}
            required={true}
          />
        </div>


        <div>
          <button type="submit" onClick={this.handleSubmit}>
            {this.props.label}
          </button>
        </div>
        <div>
          <a onClick={this.props.switchSignBox}> {this.props.oppositeLabel} </a>
        </div>
        <p> {this.state.loginMessage}</p>
      </form>
    );
  }

  public async handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const user: User = Storage.getItem(StorageKey.USER);
    const result = await user.login(this.state.userName, this.state.password)
    this.setState({ loginMessage: result })
    if (result === SUCCESS.LOGIN_PASSWORD) {
      // sleep 1.5 seconds before rendering new state
      await new Promise(resolve => setTimeout(resolve, 1500));
      Routing.reloadBrowser()
    }
  }


  public handleOnChange(event: any) {
    // @ts-ignore these can never be null, use ignore to save code
    this.setState({ [event.target.id]: event.target.value });
  }
  // public inputMustBeApa(element: any) {
  //   if (element.value !== "apa") {
  //     element.setCustomValidity("You input must be apa");
  //   } else {
  //     element.setCustomValidity("");
  //   }
  // }
}

export default SignInBox;
