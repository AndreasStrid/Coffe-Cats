import * as React from 'react';
import '../../App.css'
import ClickEvent from '../../objects/ClickEvent';
import List from '../List';


interface IProps {
    menuButtons: ClickEvent[];
}

class Menu extends React.Component<IProps> {

    public render() {
        return (<div className="menu">
            <List list={this.props.menuButtons} />
        </div>);
    }
}

export default Menu;
