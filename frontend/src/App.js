import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/Search'

class App extends Component {
  constructor(props){
     super(props) ;

      this.logout = this.logout.bind(this);
   }

  logout(e){
    e.preventDefault();
    localStorage.removeItem("persist:polls");
    window.location.reload();
    }
/*
 componentDidMount(){
    this.connection = new WebSocket('ws://localhost:8000/ws/stream/');   
    this.connection.onopen = () => {console.log('open websocket App.js')};
    }
  componentWillUnmount(){
    this.connection.onclose = () => {console.error('WebSocket Closed App.js')};
    }
*/
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
        <button onClick={this.logout}>LOGOUT</button>
      </div>
    );
  }
}


export default App;
