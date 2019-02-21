
import Storage from "./Storage"
import StorageKey from "./StorageKey"
import { getAllProducts } from "../api/TestApi"
import Product from "./Product";

class ProductList implements ProductListState {
    public products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    public async getAllProducts(token: string): Promise<string> {

        return await getAllProducts(token).then((productList) => {
            Storage.setItem(StorageKey.PRODUCTS, productList);
            return 'true';
        }).catch((error) => {
            return error;
        });
    }

    public async updateProducts(): Promise<string> {
        const products = Storage.getItem(StorageKey.PRODUCTS);
        if (products.productList.length === 0) {
            return await this.getAllProducts(Storage.getItem(StorageKey.USER).token).then((result) => { return result; })
        }
        return new Promise<string>((reject) => { reject('Already fetched') }).catch(() => { return "Alredy fetched" })

    }

}

export default ProductList;
