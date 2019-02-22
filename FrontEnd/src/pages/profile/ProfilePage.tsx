import * as React from "react";
import User from "src/types/User";
import UserState from "src/types/User";
import "./ProfilePageStyle.css";
import UserService from "src/services/UserService";

class ProfilePage extends React.Component<{}, UserState> {

    constructor() {
        super({});
        const user: User = UserService.getUser(ProfilePage.name);
        this.state = {
            name: user.name,
            money: user.money,
            customerLevel: user.customerLevel,
            token: user.token,
        }
    }

    public render() {
        return (<div className="profilePage">

            <div className="profilePage-container">

                <div className="profilePage-container item">
                    <div> <h2>Name:</h2> </div>
                    <div>  <p>{this.state.name}</p> </div>
                </div>

                <div className="profilePage-container item">
                    <div>   <h2>Money:</h2> </div>
                    <div>    <p> {this.state.money} </p> </div>
                </div>

                <div className="profilePage-container item">
                    <div> <h2>CustomerLevel:</h2> </div>
                    <div>  <p> {this.state.customerLevel} </p> </div>
                </div>

                <div className="profilePage-container item">
                    <div> <h2>Token: </h2></div>
                    <div><p>{`Token${this.state.token}`} </p> </div>
                </div>

            </div>

        </div>)
    }
}

export default ProfilePage;
