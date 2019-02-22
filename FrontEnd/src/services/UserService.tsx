import User from "src/types/User";
import CustomerLevel from "src/types/CustomerLevel";
import StorageKey from "src/types/StorageKey";
import Storage from "src/types/Storage";
import { login } from "src/api/TestApi";
import SUCCESS from "src/content/messages/Successes";

class UserService {

    public static getUser(caller: string): User {
        return Storage.getItem(`${caller} -> getUser`, StorageKey.USER);
    }
    public static cleanUser(): User {
        return { name: "", money: 0, customerLevel: CustomerLevel.NULL, token: '', }
    }

    public static async login(caller: string, name: string, password: string): Promise<string> {

        return await login(name, password).then((user) => {
            Storage.setItem(`${caller} -> login`, StorageKey.USER, user);
            return SUCCESS.LOGIN_PASSWORD;
        }).catch((error) => {
            return error;
        });
    }

    public static logout(caller: string) {
        Storage.setItem(`${caller} -> logout`, StorageKey.USER, this.cleanUser());
    }

    public static isSignedIn(caller: string): boolean {
        if (Storage.getItem(`${caller} -> isSignedIn`, StorageKey.USER).token !== null) {
            return true;
        } else {
            return false;
        }
    }

    public static isAuthorized(customerLevel: CustomerLevel): boolean {
        if (Storage.getItem(UserService.isAuthorized.name, StorageKey.USER).customerLevel >= customerLevel) {
            return true;
        } else {
            return false;
        }
    }
}

export default UserService
