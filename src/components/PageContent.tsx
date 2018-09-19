import * as React from 'react';
import '../App.css';
// import Box from './Box'; homePage
import './Components.css';

import * as CAT_IMAGE from '../cat_in_coffecup.jpg';
import * as COFFE_IMAGE from '../coffe_cat_art.jpg';


class PageContent extends React.Component {

    public render() {
        return (
            <div className="homePage">

                <div className="topArea">
                    <h1> All your need is </h1>
                </div>

                <div className="apa">
                    <div className="apa1">
                        <h1> Cats </h1>
                        <p> Cats are fluffy, awesome and the reason why the internet exist. Just by looking at their cute faces makes you happy. So you are not buying a pet you are buying happines. In this case renting happines for a reasoniable price </p>
                    </div>
                    <div className="apa2">
                        <img src={CAT_IMAGE} alt="" />
                    </div>
                </div>

                <div className="apa">
                    <div className="apa1">
                        <h1> Coffe </h1>
                        <p> Coffe is good, Coffe is warm, Coffie is life, Drink Coffe and you will see your purpose in life</p>
                    </div>
                    <div className="apa2">
                        <img src={COFFE_IMAGE} alt="" />
                    </div>
                </div>


                <div className="apa">
                    <div className="apa1">
                        <h1> Coffe </h1>
                        <p> Coffe is good, Coffe is warm, Coffie is life, Drink Coffe and you will see your purpose in life</p>
                    </div>
                    <div className="apa2">
                        <img src={COFFE_IMAGE} alt="" />
                    </div>
                </div>
            </div >);
    }
}

export default PageContent;
