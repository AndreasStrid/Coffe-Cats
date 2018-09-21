import * as React from 'react';
import '../../App.css'
import { ListStyle } from '../../content/Variables';
import ClickEvent from '../../objects/ClickEvent';
import ListItemComp from './ListItemComp';

interface IProps {
    list: ClickEvent[];
    style: ListStyle;
}

class ListComp extends React.Component<IProps> {

    public render() {
        return (<div className={this.props.style}>
            {this.createItemList(this.props.list)}
        </div>);
    }
    public createItemList(list: ClickEvent[]): JSX.Element {
        const listElement =
            list.map((item: ClickEvent) => {
                return (<ListItemComp clickEvent={item} key={item.name} id={item.name} />);
            })

        return (<ul> {listElement} </ul>);
    }
}

export default ListComp;
