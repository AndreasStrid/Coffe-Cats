import User from "./User";
import StorageKey from "./StorageKey";
import ProductList from "./ProductList";
import UserService from "src/services/UserService";
import ProductService from "src/services/ProductService";
import Log from "./Log";
import { DEBUG } from "src/content/Variables"

const user: User = UserService.cleanUser();
const productList: ProductList = ProductService.cleanProductList();
let language = null;
let url = null;

const GET_ITEM = 'getItem';
const SET_ITEM = 'setItem';
const SET_OBJECTS = 'setObjects'

const Storage = {

    getItem(caller: string, key: StorageKey): any {
        if (key === StorageKey.USER) {
            // @ts-ignore
            const storageUser: User = JSON.parse(localStorage.getItem(StorageKey.USER));
            Log.debug(DEBUG.STORAGE, caller, GET_ITEM, storageUser);
            return storageUser;
        }
        else if (key === StorageKey.LANGUAGE) {
            language = localStorage.getItem(StorageKey.LANGUAGE);
            Log.debug(DEBUG.STORAGE, caller, GET_ITEM, language);
            return language;
        }
        else if (key === StorageKey.URL) {
            url = localStorage.getItem(StorageKey.URL);
            Log.debug(DEBUG.STORAGE && DEBUG.ROUTING, caller, GET_ITEM, url);
            return url;
        }
        else if (key === StorageKey.PRODUCTS) {
            // @ts-ignore
            const storageProducts: ProductList = JSON.parse(localStorage.getItem(StorageKey.PRODUCTS));
            Log.debug(DEBUG.STORAGE, caller, GET_ITEM, storageProducts);
            return storageProducts;
        }

    },
    setItem(caller: string, key: StorageKey, data: any) {
        if (key === StorageKey.USER) {
            localStorage.setItem(StorageKey.USER, JSON.stringify(data));
            Log.debug(DEBUG.STORAGE, caller, SET_ITEM, data);
        }
        else if (key === StorageKey.LANGUAGE) {
            localStorage.setItem(StorageKey.LANGUAGE, data);
            Log.debug(DEBUG.STORAGE, caller, SET_ITEM, data);
        }
        else if (key === StorageKey.URL) {
            localStorage.setItem(StorageKey.URL, data);
            Log.debug(DEBUG.STORAGE && DEBUG.ROUTING, caller, SET_ITEM, data);
        }
        else if (key === StorageKey.PRODUCTS) {
            localStorage.setItem(StorageKey.PRODUCTS, JSON.stringify(data));
            Log.debug(DEBUG.STORAGE, caller, SET_ITEM, data);
        }
    },
    setObjects() {
        if (localStorage.getItem(StorageKey.USER) === null) {
            localStorage.setItem(StorageKey.USER, JSON.stringify(user));
            Log.debug(DEBUG.STORAGE, 'Storage', SET_OBJECTS, user);
        }
        if (localStorage.getItem(StorageKey.PRODUCTS) === null) {
            localStorage.setItem(StorageKey.PRODUCTS, JSON.stringify(productList));
            Log.debug(DEBUG.STORAGE, 'Storage', SET_OBJECTS, productList);
        }
        if (localStorage.getItem(StorageKey.LANGUAGE) === null) {
            localStorage.setItem(StorageKey.LANGUAGE, "eng.json");
            Log.debug(DEBUG.STORAGE, 'Storage', SET_OBJECTS, "eng.json");
        }
        if (localStorage.getItem(StorageKey.URL) === null) {
            // @ts-ignore
            localStorage.setItem(StorageKey.URL, document.location.pathname);
            Log.debug(DEBUG.STORAGE, 'Storage', SET_OBJECTS, document.location.pathname);
        }
    }
}


export default Storage
