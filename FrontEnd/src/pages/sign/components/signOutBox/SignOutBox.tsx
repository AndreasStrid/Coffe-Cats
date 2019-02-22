import * as React from "react";
import Routing from "src/navigation/Routing";
import UserService from "src/services/UserService";

class SignOutBox extends React.Component<SignedOutBoxProps, SignedOutBoxProps> {

    constructor(props: SignedOutBoxProps) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    public render() {
        return (
            <div className="signBox">

                <label>{this.props.label}</label>

                <button onClick={this.handleClick}>
                    {this.props.label}
                </button>
            </div>
        );
    }

    public handleClick(event: any) {
        UserService.logout(SignOutBox.name)
        Routing.reloadBrowser();
    }
}

export default SignOutBox;
