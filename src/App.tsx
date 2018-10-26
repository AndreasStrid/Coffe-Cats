import * as React from "react";
import "./App.css";
import Navbar from "./navigation/navBar/NavBar";
import { NAVBAR_BUTTONS } from "./content/RedirectButtons"
import { IMAGES } from "./content/Variables"
import Routing from "./navigation/Routing"
import Storage from "./types/Storage"
import StorageKey from "./types/StorageKey";

class App extends React.Component<any> {
    constructor(props: any) {
        super(props);
        this.changeLanguage = this.changeLanguage.bind(this);
        // Storage.setObjects();
        Routing.browserInput(Storage.getItem(StorageKey.URL));
    }


    public render() {
        return (
            <div className="appGrid">
                <Navbar swe={<img src={IMAGES.SWE_FLAG.img} alt={IMAGES.SWE_FLAG.name} id={IMAGES.SWE_FLAG.name} onClick={this.changeLanguage} />} eng={<img src={IMAGES.ENG_FLAG.img} alt={IMAGES.ENG_FLAG.name} id={IMAGES.ENG_FLAG.name} onClick={this.changeLanguage} />} buttons={NAVBAR_BUTTONS} />

                <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </div>

        );
    }

    public changeLanguage(event: any) {
        Storage.setItem(StorageKey.LANGUAGE, event.target.id)
        Routing.reloadApplication(document.location.pathname);
    }


}

export default App;
