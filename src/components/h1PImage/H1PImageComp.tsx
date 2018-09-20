import * as React from 'react';
import '../../App.css';
import './H1PImageStyle.css'

import H1PImageObj from './H1PImageObj';

interface IProps {
    content: H1PImageObj;
}

class H1PImageComp extends React.Component<IProps> {

    public render() {
        return (
            <div className="container">
                <div className="H1_P">
                    <h1> {this.props.content.h1} </h1>
                    <p> {this.props.content.p} </p>
                </div>
                <div className="image">
                    <img src={this.props.content.img} alt="" />
                </div>
            </div>
        );
    }
}

export default H1PImageComp;
