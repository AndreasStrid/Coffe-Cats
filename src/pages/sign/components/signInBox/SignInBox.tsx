import * as React from "react";
import StorageKey from "src/types/StorageKey";
import User from "src/types/User";
import Storage from "src/types/Storage";
import Routing from "src/navigation/Routing";

class SignInBox extends React.Component<SignInBoxProps, SignInBoxState> {
  constructor(props: any) {
    super(props);
    this.state = {
      password: "",
      userName: "",
      loginMessage: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  public render() {
    return (
      <form className="signBox" onSubmit={this.handleSubmit}>
        <h1> {this.props.label} </h1>
        {this.props.stateNames.map((stateName: string) => {
          return this.renderInputBox(
            stateName.charAt(0).toUpperCase() + stateName.slice(1),
            stateName
          );
        })}
        <div>
          <button type="submit" onClick={this.handleSubmit}>
            {this.props.label}
          </button>
        </div>
        <p> {this.state.loginMessage}</p>
      </form>
    );
  }

  public renderInputBox(label: string, id: string) {
    return (
      <div key={id}>
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
  public async handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const user: User = Storage.getItem(StorageKey.USER);
    this.setState({ loginMessage: user.login(this.state.userName, this.state.password) })
    // sleep 1.5 seconds before rendering new state
    await new Promise(resolve => setTimeout(resolve, 1500));
    Routing.reloadApplication(Storage.getItem(StorageKey.URL))
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
