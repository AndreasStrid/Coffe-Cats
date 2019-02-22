import * as React from "react";
import ProductList from "src/types/ProductList"
import Product from "src/types/Product"
import ProductService from "src/services/ProductService";
import ERROR from "src/content/messages/Errors"
import ProductComp from "./ProductComp";

let errorMessage = '';

class ProductPage extends React.Component<{}, ProductList> {
    constructor() {
        super({});
        this.state = {
            products: ProductService.getProducts().products
        }
    }

    public async loadProducts(): Promise<void> {
        const result = await ProductService.updateProducts(ProductPage.name);
        errorMessage = (result === ERROR.PRODUCTS_NOT_FOUND) ? ERROR.PRODUCTS_NOT_FOUND : '';
    }

    // public isError(): boolean {
    //     return errorMessage === ERROR.PRODUCTS_NOT_FOUND;
    // }

    public success() {

        const products = this.state.products.map((product: Product) => {
            return <ProductComp
                key={product.productId}
                productId={product.productId}
                name={product.img}
                description={product.description}
                img={product.img}
                price={product.price}
            />
        });
        return <div>{products}</div>;


    }

    public error() {
        return <p> {errorMessage} </p>
    }

    public render() {
        console.log('ProductPage state ', JSON.stringify(this.state))
        console.log('errorMessage ', errorMessage)
        return (
            <div>
                {errorMessage === ERROR.PRODUCTS_NOT_FOUND ? this.error() : this.success()}
            </div>)
    }
}

export default ProductPage
