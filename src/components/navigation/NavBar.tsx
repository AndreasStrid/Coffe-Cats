import * as React from 'react';
import '../../App.css'
import ClickEvent from '../../objects/ClickEvent';
import MenuButton from '../MenuButton';

interface IProps {
    navBarButtons: ClickEvent[];
}

class Navbar extends React.Component<IProps> {

    public render() {
        return (<div className="navbar">
            {this.createNavbar(this.props.navBarButtons)}
        </div>);
    }
    public createNavbar(navBarButtons: ClickEvent[]) {
        const MenuElement =
            navBarButtons.map((item: ClickEvent) => {
                return (<MenuButton clickEvent={item} key={item.name} id={item.name} />);
            })

        return (<ul> {MenuElement} </ul>);
    }
}

export default Navbar;
