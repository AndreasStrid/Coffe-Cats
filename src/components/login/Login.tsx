
/* interface IState {
 loggedIn: boolean;
} */

class Login {
    public loggedIn: boolean;

    constructor() {
        this.loggedIn = false;
    }

    public logIn() {
        // tslint:disable-next-line:no-console
        console.log("Login is: " + this.loggedIn);
    }
    // const staticValues = { login: { name: 'Login', event: MenuButton.handleClick } };
}

export default Login;





