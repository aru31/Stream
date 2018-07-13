import React, { Component } from 'react';
import SearchBar from './components/Search'
import PlayStream from './components/PlayStream'
import './App.css';
import logo from './logo.svg';

/*import Streamuser from './components/LoginForm'
*/
class App extends Component {
  constructor(props){
     super(props) ;

      this.logout = this.logout.bind(this);
   }

  async componentDidMount () {
      await import('./components/socket.js');
  /*    console.log(Streamuser) */
    }

  logout(e){
    e.preventDefault();
    localStorage.removeItem("persist:polls");
    window.location.reload();
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo_container">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h1 className="App-title">Viberr</h1>
        <button onClick={this.logout} className="logout">LOGOUT</button>
        </header>
        <div className="search">
           <SearchBar />
        </div>
        <footer className="audioplayer">
        <div className="play">
           <PlayStream />
        </div>
        </footer>
      </div>
    );
  }
}


export default App;
