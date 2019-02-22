
import { sign } from "jsonwebtoken";
// import ImageConverter from "src/types/ImageConverter"
import UserData from "src/content/testData/User_Data.json"
import ProductsData from 'src/content/testData/Products_Data.json'
import User from "src/types/User";
import ProductList from "src/types/ProductList";
import ERROR from "src/content/messages/Errors"

const secretKey = "secretKey"
const User: User = UserData;
const ProductList: ProductList = ProductsData;

async function login(name: string, password: string): Promise<User> { // cb: (data: string) => string

    return await new Promise<User>((resolve, reject) => {
        setTimeout(() => {
            if (password === UserData.password && name === User.name) {
                User.token = sign({ name, password }, secretKey);
                resolve(User);
            }
            else {
                reject(ERROR.LOGIN_PASSWORD);
            }
        }, 1000);
    });


}

async function fetchProducts(token: string): Promise<ProductList> {

    return await new Promise<ProductList>((resolve, reject) => {
        setTimeout(() => {
            if (token === UserData.token) {
                console.log("ProductData: ", ProductsData)
                resolve(ProductList);
            }
            else {
                console.log("ProductData error: ", ERROR.PRODUCTS_NOT_FOUND)
                reject(ERROR.PRODUCTS_NOT_FOUND);
            }
        }, 1000);
    });
}

export { login, fetchProducts };
