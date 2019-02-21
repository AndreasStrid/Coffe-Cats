class Product implements ProductState {
    public productId: string;
    public name: string;
    public description: string;
    public img: any;
    public price: number;

    constructor(productId: string, name: string, description: string, img: any, price: number) {
        this.productId = productId;
        this.name = name;
        this.description = description;
        this.img = img;
        this.price = price;
    }
}

export default Product;
