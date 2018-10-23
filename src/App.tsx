import * as React from "react";
import "./App.css";
import Navbar from "./components/navigation/NavBar";
import { NAVBAR_BUTTONS } from "./content/RedirectButtons"

class App extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="appGrid">
                <Navbar buttons={NAVBAR_BUTTONS} currentUrl={document.location.pathname} />
            </div>
        );
    }


}

export default App;
