import * as React from "react";
import {
  Route,
  BrowserRouter as Router,
  RouteComponentProps
} from "react-router-dom";
import "./App.css";
// mport Navbar from "./components/navigation/NavBar";
// import NAVBAR_BUTTONS from "src/content/NavButtons";

interface OneProps extends RouteComponentProps<any> {}
const One: React.SFC<OneProps> = () => <h1>One</h1>;

class App extends React.Component<{}> {
  public RENDER_PAGE_ERROR: "Couldn't render this page";
  constructor() {
    super({});
  }

  public render() {
    return (
      <Router>
        <div className="appGrid">
          <Route path="/home" component={<One name="Apa" />} />
          {/* <div className="navBarGrid">
            <Navbar buttons={NAVBAR_BUTTONS} />
          </div> */}
          {/* <div className="contentGrid">{page}</div> */}
        </div>
      </Router>
    );
  }
  // public pageRenderer(pageSelected: string): JSX.Element {
  //   if (pageSelected === HOME_PAGE.url) {
  //     return <HomePage H1PImageList={HOME_PAGE.H1PImageList} />;
  //     // <HomePage H1PImageList={HOME_PAGE.H1PImageComponetns} />;
  //   } else if (pageSelected === LOGIN_PAGE.url) {
  //     return <LoginPageComp />;
  //   }
  //   // else if (pageSelected === PAGES.ABOUT_PAGE.url) {
  //   //   return ABOUT_PAGE;
  //   // }
  //   // else if (pageSelected === PAGES.BOOKING_PAGE.url) {
  //   //   return BOOKING_PAGE;
  //   // }
  //   return <p>{this.RENDER_PAGE_ERROR}</p>;
  // }

  // public menuRenderer(pageSelected: string): JSX.Element {
  //   if (pageSelected === ABOUT_PAGE.url) {
  //     return <Menu buttons={ABOUT_PAGE.menuButtons} />;
  //   } else if (pageSelected === BOOKING_PAGE.url) {
  //     return <Menu buttons={BOOKING_PAGE.menuButtons} />;
  //   } else if (pageSelected === HOME_PAGE.url) {
  //     return <Menu buttons={HOME_PAGE.menuButtons} />;
  //   } else if (pageSelected === LOGIN_PAGE.url) {
  //     return <Menu buttons={LOGIN_PAGE.menuButtons} />;
  //   } else if (pageSelected === PROFILE_PAGE.url) {
  //     return <Menu buttons={PROFILE_PAGE.menuButtons} />;
  //   }
  //   return <p>dd</p>;
  // }
}

export default App;
