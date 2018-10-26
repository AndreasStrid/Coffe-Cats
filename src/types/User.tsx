import CustomerLevel from "./CustomerLevel"
import { login } from "src/api/TestApi";
import { decode } from "jsonwebtoken";
import Storage from "./Storage"
import StorageKey from "./StorageKey";
import ERROR from "src/content/messages/Errors"
import SUCCESS from "src/content/messages/Successes"

class User {
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

    public login(name: string, password: string): string {
        const token = login(name, password);
        if (token !== null) {
            console.log("decode token: ", decode(token));
            this.token = token;
            this.name = name;
            Storage.setItem(StorageKey.USER, this);
            return SUCCESS.LOGIN_PASSWORD;
        } else {
            return ERROR.LOGIN_PASSWORD;
        }
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
