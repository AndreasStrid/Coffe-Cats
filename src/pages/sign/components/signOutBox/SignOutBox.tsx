import * as React from "react";
import StorageKey from "src/types/StorageKey";
import User from "src/types/User";
import Storage from "src/types/Storage";
import Routing from "src/navigation/Routing";

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
        const user: User = Storage.getItem(StorageKey.USER);
        user.logout()
        Routing.reloadBrowser();
    }
}

export default SignOutBox;
