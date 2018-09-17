import * as React from 'react';
import '../../App.css'
import MenuButton from '../MenuButton';

interface IProps {
    menuButtons: string[];
}

// const staticValues = { login: { name: 'Login', event: MenuButton.handleClick } };

class Menu extends React.Component<IProps> {

    public render() {
        return (<div className="menu">
            {this.createMenu(this.props.menuButtons)}
        </div>);
    }

    public createMenu(menuButtons: string[]) {
        const MenuElement =
            menuButtons.map((item: string) => {
                return (<MenuButton text={item} key={item} id={item} />);
            })

        return (<ul> {MenuElement} </ul>);
    }
}

export default Menu;
