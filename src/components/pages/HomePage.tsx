import * as React from 'react';
import '../../App.css';
import '../Components.css';

import H1PImage from '../H1PImage';
import H1PImageComp from '../H1PImageComp';


interface IProps {
    H1PImageList: H1PImage[];
}

class HomePage extends React.Component<IProps> {

    public render() {
        return (
            <div className="homePage">

                <div className="topArea">
                    <h1> All your need is </h1>
                </div>

                {this.createHomePage(this.props.H1PImageList)}
            </div >);
    }
    public createHomePage(components: H1PImage[]): JSX.Element {
        const H1PImageElements =
            components.map((component: H1PImage) => {
                return (<H1PImageComp content={component} key={component.h1} />);
            })

        return (<ul> {H1PImageElements} </ul>);
    }
}

export default HomePage;
