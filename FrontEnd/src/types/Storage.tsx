import User from "./User";
import StorageKey from "./StorageKey";
import CustomerLevel from "./CustomerLevel";
import ProductList from "./ProductList";

const user = new User("", 0, null, CustomerLevel.NULL);
const productList = new ProductList([]);
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
            language = localStorage.getItem(StorageKey.LANGUAGE)
            return language;
        }
        else if (key === StorageKey.URL) {
            url = localStorage.getItem(StorageKey.URL)
            return url;
        }
        else if (key === StorageKey.PRODUCTS) {
            // @ts-ignore
            const productsValues: ProductList = JSON.parse(localStorage.getItem(StorageKey.PRODUCTS))
            console.log('productsValues: ', JSON.stringify(productsValues));
            return productList;
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
        else if (key === StorageKey.PRODUCTS) {
            localStorage.setItem(StorageKey.PRODUCTS, JSON.stringify(data));
        }
    },
    setObjects() {
        if (localStorage.getItem(StorageKey.USER) === null) {
            console.log("APP New user is set")
            localStorage.setItem(StorageKey.USER, JSON.stringify(user));
        }
        if (localStorage.getItem(StorageKey.PRODUCTS) === null) {
            localStorage.setItem(StorageKey.PRODUCTS, JSON.stringify(productList));
        }
        if (localStorage.getItem(StorageKey.LANGUAGE) === null) {
            localStorage.setItem(StorageKey.LANGUAGE, "eng.json");
        }
        if (localStorage.getItem(StorageKey.URL) === null) {
            // @ts-ignore
            localStorage.setItem(StorageKey.URL, document.location.pathname);
        }
    }
}


export default Storage
