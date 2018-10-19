import * as React from "react";
import "./App.css";
import Navbar from "./components/navigation/NavBar";
import { NAVBAR_BUTTONS, MENU_BUTTONS } from "src/content/RedirectButtons";
import { HOME_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE } from "src/content/Pages"
import Menu from "./components/menu/Menu";
import HomePage from "./pages/homePage/HomePage";
import Login from "./objects/Login";
import LoginPage from "src/pages/login/LoginPage";

const tempPages = [{ url: 'temp', component: <p> temp </p> }];
const currentUrl = document.location.pathname;

class App extends React.Component<{}> {
  public RENDER_PAGE_ERROR: "Couldn't render this page";
  constructor() {
    super({});
  }

  public render() {
    return (

      <div className="appGrid">
        <div className="navBarGrid">
          <Navbar currentUrl={currentUrl} buttons={NAVBAR_BUTTONS} pages={this.createMenu()} />
        </div>
        {/* <div className="contentGrid">{page}</div> */}
      </div>

    );
  }
  public createMenu(): IPage[] {
    let menuList: IPage[];
    menuList = [];
    for (let menu of MENU_BUTTONS) {
      menuList.push({ url: currentUrl, component: <Menu currentUrl={currentUrl} buttons={menu} pages={this.createPages()} /> });
    }
    return menuList;

  }
  public createPages(): IPage[] {
    let pageList: IPage[];
    pageList = [];
    pageList.push({ url: currentUrl, component: <HomePage H1PImageList={HOME_PAGE} /> });
    pageList.push({ url: currentUrl, component: <LoginPage loginBox={SIGN_IN_PAGE} /> });
    pageList.push({ url: currentUrl, component: <LoginPage loginBox={SIGN_UP_PAGE} /> });
    pageList.push({ url: currentUrl, component: <HomePage H1PImageList={HOME_PAGE} /> });
    pageList.push({ url: currentUrl, component: <HomePage H1PImageList={HOME_PAGE} /> });
    return pageList;

  }
  // public createPages(): IPage[] {
  //   let pageList: IPage[];
  //   pageList = [];
  //   for (let page of PAGES) {
  //     pageList.push({ url: currentUrl, component: <Menu buttons={menu} pages={tempPages} currentUrl={currentUrl} /> });
  //   }
  // }

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
