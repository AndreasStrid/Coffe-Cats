import { CustomerLevel, ERROR_MESSAGES, SessionStorage, SUCCESS_MESSAGES } from '../content/Variables';
// import { checkToken, login } from '../../api/API';

class UserObj {

    public name: string;
    public money: number;
    public customerLevel: CustomerLevel;
    public token: string | null;

    public loggedIn: boolean;

    // constructor(name: string, money: number, customerLevel: CustomerLevel, token: string) {
    //     this.name = name;
    //     this.money = money;
    //     this.customerLevel = customerLevel;
    //     this.token = token;
    // }
    constructor() {
        this.name = '';
        this.money = 0;
        this.token = '';
    }

    public login(name: string, password: string): string {
        const token = 'token'; // TEMP login(name, password);
        if (token != null) {
            sessionStorage.setItem(SessionStorage.TOKEN, token);
            return SUCCESS_MESSAGES.login;
        }
        else {
            return ERROR_MESSAGES.login;
        }
    }
    public logout() {
        sessionStorage.set(SessionStorage.TOKEN, null);
    }

    public isLoggedIn(): boolean {
        if (sessionStorage.getItem(SessionStorage.TOKEN) != null) {
            this.token = sessionStorage.getItem(SessionStorage.TOKEN);
            const valid = true; // TEMP checkToken(this.token);
            return valid;
        }
        else {
            return false;
        }
    }

    public isAuthorized(customerLevel: CustomerLevel): boolean {
        if (this.customerLevel >= customerLevel) {
            return true;
        }
        else {
            return false;
        }
    }
    // public loginHandler(e: React.MouseEvent<HTMLElement>) {
    //     this.login(this.name, this.url);
    // }
}

export default UserObj;
