import ProductList from "src/types/ProductList";
import { fetchProducts } from "src/api/TestApi";
import StorageKey from "src/types/StorageKey";
import Storage from "src/types/Storage";

class ProductService {

    public static getProducts(): ProductList {
        return Storage.getItem('getProducts', StorageKey.PRODUCTS);
    }

    public static async fetchProducts(caller: string, token: string): Promise<ProductList | string> {

        return await fetchProducts(token).then((productList) => {
            Storage.setItem(`${caller} -> fetchProducts`, StorageKey.PRODUCTS, productList);
            return Storage.getItem(`${caller} -> fetchProducts`, StorageKey.PRODUCTS);
        }).catch((error) => {
            return error;
        });
    }

    public static async updateProducts(caller: string): Promise<string> {
        const products = Storage.getItem(`${caller} -> updateProducts`, StorageKey.PRODUCTS);
        if (products.productList.length === 0) {
            return await this.fetchProducts('fetchProducts -> ', Storage.getItem(`${caller} -> updateProducts`, StorageKey.USER).token)
                .then(() => { return 'Update done'; })
                .catch((error) => { return error })
        }
        return await new Promise<string>((reject) => { reject('Already fetched') }).then(() => { return "Alredy fetched" })

    }

    public static cleanProductList(): ProductList {
        return { products: [] };
    }
}

export default ProductService
