import * as React from "react";
import "src/pages/profile/ProfilePageStyle.css";
import Product from "src/types/Product";

class ProductComp extends React.Component<Product> {

    constructor(props: Product) {
        super(props);
    }

    public render() {
        return (<div className="profilePage">

            <div className="profilePage-container">

                <div className="profilePage-container item">
                    <div> <h2>:</h2> </div>
                    <div>  <p>{this.props.name}</p> </div>
                </div>

                <div className="profilePage-container item">
                    <div>   <h2>Money:</h2> </div>
                    <div>    <p> {this.props.description} </p> </div>
                </div>

                <div className="profilePage-container item">
                    <div> <h2>CustomerLevel:</h2> </div>
                    <div>  <p> {this.props.img} </p> </div>
                </div>

                <div className="profilePage-container item">
                    <div> <h2>Token: </h2></div>
                    <div><p>{`Token${this.props.price}`} </p> </div>
                </div>

            </div>

        </div>)
    }
}

export default ProductComp;
