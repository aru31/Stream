import React, { Component } from 'react';
import SearchBar from './components/Search'
import PlayStream from './components/PlayStream'
import './App.css';
import logo from './logo.svg';
import axios from 'axios';

/*import Streamuser from './components/LoginForm'
*/

class App extends Component {
  constructor(props){
     super(props) ;
    this.state = {
      user: "",
    };

      this.logout = this.logout.bind(this);
   }


    async componentDidMount () {
      await import('./components/socket.js');
  /*    console.log(Streamuser) */
     
      const pars = localStorage.getItem('persist:polls');
      const id = JSON.parse(JSON.parse(pars).auth).access.user_id;
      axios({
        method: 'get',
        url: '/stream/user/register/' + id + '/',
        responseType: 'stream'
      })
        .then((response) => {
           console.log(response)
           this.setState({
             user: response.data.username,
            });
        });

    }

  logout(e){
    e.preventDefault();
    localStorage.removeItem("persist:polls");
    window.location.reload();
    }

  profile(e){
    window.location = '/profile';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo_container">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h1 className="App-title">Viberr</h1>
          <button onClick={this.profile} className="profile">{this.state.user} profile</button>
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
