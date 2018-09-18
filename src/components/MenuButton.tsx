import * as React from 'react';
import '../App.css'
import ClickEvent from '../objects/ClickEvent'

interface IProps {
    clickEvent: ClickEvent;
    id: string;
}

class MenuButton extends React.Component<IProps>{

    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (<li onClick={this.props.clickEvent.eventHandler}> {this.props.clickEvent.name} </li>);
    }
}

export default MenuButton;
