import * as React from 'react';
import './App.css';

// import Box from './components/Box';
import { Login } from './components/login/Login';
import Menu from './components/menu/Menu';
import Navbar from './components/navigation/NavBar'
import Page from './components/Page'
import ClickEvent from './objects/ClickEvent';
// import HomePageHeaderClass from './homePage/HomePageHeaderClass';
// import HomePageHeaderStateless from './homePage/HomePageHeaderStateless';

// const menuButtons = ['Login', 'Button2', 'Button3'];
// const menuFunctions = [new Login('login').logIn, new Login('cats').logIn]

const clickEvents = [new ClickEvent('Login', new Login('login').logIn), new ClickEvent('Button2', new Login('cats').logIn)];

class App extends React.Component {
  public render() {
    return (

      <div className="appGrid">
        <div className="menuGrid">
          <p> Menu </p>
          <Menu menuButtons={clickEvents} />
        </div>
        <div className="navBarGrid">
          <p>Navbar</p>
          <Navbar />
        </div>
        <div className="contentGrid">
          <p> Home Page</p>
          <Page />
        </div>
      </div>

    );
  }
}

export default App;
