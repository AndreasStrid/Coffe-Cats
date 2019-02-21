
import Storage from "./Storage"
import StorageKey from "./StorageKey"
import ERROR from "src/content/messages/Errors"
import { getAllProducts } from "../api/TestApi"
import Product from "./Product";


class ProductList implements ProductListState {
    public products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    public getAllProducts(token: string): string {

        let result = '';
        const apa = async () => {
            await getAllProducts(token).then((productList) => {
                Storage.setItem(StorageKey.PRODUCTS, productList);
                result = 'true';
            }).catch((error) => {
                // Storage.setItem(StorageKey.PRODUCTS, error);
                result = ERROR.PRODUCTS_NOT_FOUND;
            });
        }
        console.log("getAllProducts: ", apa)
        return result;
    }

    public updateProducts() {
        if (Storage.getItem(StorageKey.PRODUCTS) === null) {
            if (this.getAllProducts(Storage.getItem(StorageKey.USER).token) !== 'true') {
                console.log("hej: ")
            }
        }
    }

}

export default ProductList;
