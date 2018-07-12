import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/Search'
import PlayStream from './components/PlayStream'
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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="search">
           <SearchBar />
        </div>
        <div className="play">
           <PlayStream />
        </div>
        <button onClick={this.logout}>LOGOUT</button>
      </div>
    );
  }
}


export default App;
