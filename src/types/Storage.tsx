import User from "./User";
import StorageKey from "./StorageKey";
import CustomerLevel from "./CustomerLevel";

const user = new User("", 0, null, CustomerLevel.NULL);
let language = null;
let url = null;

const Storage = {

    getItem(key: StorageKey): any {
        if (key === StorageKey.USER) {
            // @ts-ignore
            const userValues: User = JSON.parse(localStorage.getItem(StorageKey.USER))
            user.name = userValues.name;
            user.money = userValues.money;
            user.token = userValues.token;
            user.customerLevel = userValues.customerLevel;
            return user;
        }
        else if (key === StorageKey.LANGUAGE) {
            // @ts-ignore
            language = localStorage.getItem(StorageKey.LANGUAGE)
            return language;
        }
        else if (key === StorageKey.URL) {
            // @ts-ignore
            url = localStorage.getItem(StorageKey.URL)
            return url;
        }

    },
    setItem(key: StorageKey, data: any) {
        if (key === StorageKey.USER) {
            localStorage.setItem(StorageKey.USER, JSON.stringify(data));
        }
        else if (key === StorageKey.LANGUAGE) {
            localStorage.setItem(StorageKey.LANGUAGE, data);
        }
        else if (key === StorageKey.URL) {
            localStorage.setItem(StorageKey.URL, data);
        }
    },
    setObjects() {
        if (localStorage.getItem(StorageKey.USER) === null) {
            console.log("APP New user is set")
            localStorage.setItem(StorageKey.USER, JSON.stringify(user));
        }
        if (localStorage.getItem(StorageKey.LANGUAGE) === null) {
            localStorage.setItem(StorageKey.LANGUAGE, "eng.json");
        }
        if (localStorage.getItem(StorageKey.URL) === null) {
            localStorage.setItem(StorageKey.URL, document.location.pathname);
        }
    }
}


export default Storage
