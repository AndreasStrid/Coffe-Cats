import * as React from 'react';
import '../../../App.css';
import './HomPageStyle.css'

import H1PImageComp from '../../h1PImage/H1PImageComp';
import H1PImageObj from '../../h1PImage/H1PImageObj';

interface IProps {
    H1PImageList: H1PImageObj[];
}

class HomePageComp extends React.Component<IProps> {

    public render() {
        return (
            <div className="homePage">

                <div className="topArea">
                    <h1> All your need is </h1>
                </div>

                {this.createHomePageComponents(this.props.H1PImageList)}
            </div >);
    }
    public createHomePageComponents(components: H1PImageObj[]): JSX.Element {
        const H1PImageElements =
            components.map((component: H1PImageObj) => {
                return (<H1PImageComp content={component} key={component.h1} />);
            })

        return (<ul> {H1PImageElements} </ul>);
    }
}

export default HomePageComp;
