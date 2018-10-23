import * as React from "react";
import "./App.css";
import Navbar from "src/navigation/navBar/NavBar";
import { NAVBAR_BUTTONS } from "./content/RedirectButtons"
import Routing from "src/navigation/Routing"

let currentUrl = document.location.pathname;

class App extends React.Component<any> {
    constructor(props: any) {
        super(props);
        currentUrl = Routing.browserInput(currentUrl);
    }

    public render() {
        return (
            <div className="appGrid">
                <Navbar buttons={NAVBAR_BUTTONS} currentUrl={currentUrl} />
            </div>
        );
    }


}

export default App;
