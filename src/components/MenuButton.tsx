import * as React from 'react';
import '../App.css'

interface IProps {
    text: string;
    id: string;
}


class MenuButton extends React.Component<IProps>{

    constructor(props: IProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    public render() {
        return (<li onClick={this.handleClick}> {this.props.text} </li>);
    }

    public handleClick(e: React.MouseEvent<HTMLElement>) {
        // tslint:disable-next-line:no-console
        console.log("Click on: " + this.props.text);
    }

}

export default MenuButton;
