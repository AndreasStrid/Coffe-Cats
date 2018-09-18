import * as React from 'react';
import '../../App.css'
import ClickEvent from '../../objects/ClickEvent';
import List from '../List';

interface IProps {
    navBarButtons: ClickEvent[];
}

class Navbar extends React.Component<IProps> {

    public render() {
        return (<div className="menu">
            <List list={this.props.navBarButtons} />
        </div>);
    }

}

export default Navbar;
