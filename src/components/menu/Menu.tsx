import * as React from 'react';
import '../../App.css'
import ClickEvent from '../../objects/ClickEvent';
import MenuButton from '../MenuButton';


interface IProps {
    menuButtons: ClickEvent[];
    // menuButtons: string[];
    // funci: ((e: React.MouseEvent<HTMLElement>) => void)[];
    // funci: Array<((e: React.MouseEvent<HTMLElement>) => void)>;
    // funci: Array<(<T>(arg1: T) => any)>;
}

// const staticValues = { login: { name: 'Login', event: MenuButton.handleClick } };

class Menu extends React.Component<IProps> {

    public render() {
        return (<div className="menu">
            {this.createMenu(this.props.menuButtons)}
        </div>);
    }

    public createMenu(menuButtons: ClickEvent[]) {
        const MenuElement =
            menuButtons.map((item: ClickEvent) => {
                return (<MenuButton text={item.name} action={item.eventHandler} key={item.name} id={item.name} />);
            })

        return (<ul> {MenuElement} </ul>);
    }
}

export default Menu;
