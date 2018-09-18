import * as React from 'react';
import '../App.css'
import ClickEvent from './../objects/ClickEvent';
import ListItem from './ListItem';

interface IProps {
    list: ClickEvent[];
}

class Navbar extends React.Component<IProps> {

    public render() {
        return (<div className="navbar">
            {this.createItemList(this.props.list)}
        </div>);
    }
    public createItemList(list: ClickEvent[]) {
        const listElement =
            list.map((item: ClickEvent) => {
                return (<ListItem clickEvent={item} key={item.name} id={item.name} />);
            })

        return (<ul> {listElement} </ul>);
    }
}

export default Navbar;
