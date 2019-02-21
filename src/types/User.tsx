import CustomerLevel from "./CustomerLevel"
import { login } from "src/api/TestApi";
// import { decode } from "jsonwebtoken";
import Storage from "./Storage"
import StorageKey from "./StorageKey";
import ERROR from "src/content/messages/Errors"
import SUCCESS from "src/content/messages/Successes"
import UserState from './UserState'

class User implements UserState {
    public name: string;
    public money: number;
    public customerLevel: CustomerLevel;
    public token: string | null;

    constructor(name: string, money: number, token: string | null, customerLevel: CustomerLevel) {
        this.name = name;
        this.money = money;
        this.token = token;
        this.customerLevel = customerLevel;
    }

    public clean() {
        this.name = "";
        this.money = 0;
        this.token = null;
        this.customerLevel = CustomerLevel.NULL;
    }

    // cb: (data: string) => void
    public callBackSetToken(data: string): void {
        this.token = data;
    }

    public async login(name: string, password: string): Promise<string> {

        return await login(name, password).then((user) => {
            Storage.setItem(StorageKey.USER, user);
            console.log('succes User: ', JSON.stringify(user))
            return SUCCESS.LOGIN_PASSWORD;
        }).catch((error) => {
            // Storage.setItem(StorageKey.PRODUCTS, error);
            console.log('error User: ', error);
            return ERROR.LOGIN_PASSWORD;
        });
    }

    public logout() {
        this.clean();
        Storage.setItem(StorageKey.USER, this);
    }

    public isSignedIn(): boolean {
        if (this.token !== null) {
            return true;
        } else {
            return false;
        }
    }

    public isAuthorized(customerLevel: CustomerLevel): boolean {
        if (this.customerLevel >= customerLevel) {
            return true;
        } else {
            return false;
        }
    }
    // public loginHandler(e: React.MouseEvent<HTMLElement>) {
    //     this.login(this.name, this.url);
    // }
}

export default User;
