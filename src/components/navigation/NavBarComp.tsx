import * as React from 'react';
import { ListStyle } from '../../content/Variables';
import ClickEvent from '../../objects/ClickEvent';
import List from '../list/ListComp';
import './NavBarStyle.css';

interface IProps {
    navBarButtons: ClickEvent[];
}

class NavbarComp extends React.Component<IProps> {

    public render() {
        return (<List list={this.props.navBarButtons} style={ListStyle.NAVBAR} />);
    }
}

export default NavbarComp;
