import * as React from 'react';
import './App.css';

// import Box from './components/Box';
// import Login from './components/login/Login';
import Menu from './components/menu/Menu';
import Navbar from './components/navigation/NavBar'
import Page from './components/Page'
// import HomePageHeaderClass from './homePage/HomePageHeaderClass';
// import HomePageHeaderStateless from './homePage/HomePageHeaderStateless';

const menuButtons = ['Login', 'Button2', 'Button3'];


class App extends React.Component {
  public render() {
    return (

      <div className="appGrid">
        <div className="menuGrid">
          <p> Menu </p>
          <Menu menuButtons={menuButtons} />
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
