import * as React from 'react';
import { ListStyle } from '../../content/Variables';
import ClickEvent from '../../objects/ClickEvent';
import List from '../list/ListComp';
import './MenuStyle.css';

interface IProps {
    menuButtons: ClickEvent[];
}

class MenuComp extends React.Component<IProps> {

    public render() {
        return (<List list={this.props.menuButtons} style={ListStyle.MENU} />);
    }
}

export default MenuComp;
