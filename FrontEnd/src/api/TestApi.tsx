
import { sign } from "jsonwebtoken";
import User from "src/types/User";
import UserData from "src/content/testData/User_Data.json"
import Product from "src/types/Product";
import ProductList from "src/types/ProductList";
import ERROR from "src/content/messages/Errors"


import * as PRODUCT_A_IMAGE from "src/content/images/dev/cat-item-1.jpg";
import * as PRODUCT_B_IMAGE from "src/content/images/dev/coffe-item-2.jpg";
import * as PRODUCT_C_IMAGE from "src/content/images/dev/coffe-item-2.jpg";

const productA = new Product("1", "Grey White Cat", "He wants to give you luve <3", PRODUCT_A_IMAGE, 220);
const productB = new Product("2", "Caffe Latte", "Milk i sure good with coffe", PRODUCT_B_IMAGE, 40);
const productC = new Product("3", "Black Coffe", "Made from awsome coffe beans", PRODUCT_C_IMAGE, 45);
const PRODUCT_LIST = new ProductList([productA, productB, productC]);


const secretKey = "secretKey"

async function login(name: string, password: string): Promise<User> { // cb: (data: string) => string

    return await new Promise<User>((resolve, reject) => {
        setTimeout(() => {
            if (password === UserData.password && name === UserData.name) {
                const token = sign({ name, password }, secretKey);
                resolve(new User(UserData.name, UserData.money, token, UserData.customerLevel));
            }
            else {
                reject(ERROR.LOGIN_PASSWORD);
            }
        }, 1000);
    });


}

async function getAllProducts(token: string): Promise<ProductList> {

    return new Promise<ProductList>((resolve, reject) => {
        setTimeout(() => {
            if (token === UserData.token) {
                resolve(PRODUCT_LIST);
            }
            else {
                reject('Error');
            }
        }, 1000);
    });
}

export { login, getAllProducts };
