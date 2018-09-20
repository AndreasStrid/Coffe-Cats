import * as React from 'react';
import '../../App.css'
import ClickEvent from '../../objects/ClickEvent';
import List from '../list/ListComp';

interface IProps {
    navBarButtons: ClickEvent[];
}

class NavbarComp extends React.Component<IProps> {

    public render() {
        return (<div className="menu">
            <List list={this.props.navBarButtons} />
        </div>);
    }

}

export default NavbarComp;
