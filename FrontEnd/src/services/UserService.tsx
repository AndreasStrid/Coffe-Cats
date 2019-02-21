import User from "src/types/User";
import CustomerLevel from "src/types/CustomerLevel";
import StorageKey from "src/types/StorageKey";
import Storage from "src/types/Storage";
import { login } from "src/api/TestApi";
import SUCCESS from "src/content/messages/Successes";

class UserService {

    public static cleanUser(): User {
        return { name: "", money: 0, customerLevel: CustomerLevel.NULL, token: null, }
    }

    public static async login(name: string, password: string): Promise<string> {

        return await login(name, password).then((user) => {
            Storage.setItem(StorageKey.USER, user);
            return SUCCESS.LOGIN_PASSWORD;
        }).catch((error) => {
            return error;
        });
    }

    public static logout() {
        Storage.setItem(StorageKey.USER, this.cleanUser());
    }

    public static isSignedIn(): boolean {
        if (Storage.getItem(StorageKey.USER).token !== null) {
            return true;
        } else {
            return false;
        }
    }

    public static isAuthorized(customerLevel: CustomerLevel): boolean {
        if (Storage.getItem(StorageKey.USER).customerLevel >= customerLevel) {
            return true;
        } else {
            return false;
        }
    }
}

export default UserService
