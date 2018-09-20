import * as React from 'react';
import '../../App.css'
import ClickEvent from '../../objects/ClickEvent';
import List from '../list/ListComp';


interface IProps {
    menuButtons: ClickEvent[];
}

class MenuComp extends React.Component<IProps> {

    public render() {
        return (<div className="menu">
            <List list={this.props.menuButtons} />
        </div>);
    }
}

export default MenuComp;
