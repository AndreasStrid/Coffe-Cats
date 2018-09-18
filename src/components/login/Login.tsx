
/* interface IState {
 loggedIn: boolean;
} */

class Login {
    public loggedIn: boolean;
    public name: string;

    constructor(name: string) {
        this.loggedIn = false;
        this.name = name;

        this.logIn = this.logIn.bind(this);
        this.changeNameListener = this.changeNameListener.bind(this);
    }

    public logIn(e: React.MouseEvent<HTMLElement>) {
        // tslint:disable-next-line:no-console
        console.log("Login is: " + this.loggedIn);
    }
    public changeNameListener(e: React.MouseEvent<HTMLElement>) {
        // tslint:disable-next-line:no-console
        console.log("Name is: ", this.name);
        this.name = "Bapa";
        // tslint:disable-next-line:no-console
        console.log("Name is now: ", this.name);
    }
    public sum(num1: number) {
        return num1 + num1;
    }
    set setName(name: string) {
        this.name = name;
    }
    get getName(): string {
        return this.name;
    }

    // const staticValues = { login: { name: 'Login', event: MenuButton.handleClick } };
}

// const apa = (e: React.MouseEvent<HTMLElement>) => {
//     // tslint:disable-next-line:no-console
//     console.log("Apa");
// };

export { Login };





