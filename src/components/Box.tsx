import * as React from 'react';
import './Components.css'

interface IProps {
    text: string;
    btn: boolean;
}

class Box extends React.Component<IProps>  {

    public render() {
        const button = this.addButton(this.props.btn);

        return (<div className="box">
            <p> {this.props.text}  </p>
            {button}
        </div>
        );
    }

    public addButton(addButton: boolean) {
        if (addButton === true) {
            return (<button className="btn"> Apa </button>)
        }
        else {
            return null;
        }

    }
}


export default Box;
