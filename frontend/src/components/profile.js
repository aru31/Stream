import React, { Component } from 'react';
import axios from 'axios';

export default class Profile extends Component {
 constructor(props){
  super(props);
    this.state = {
      user: "",
      firstName: "",
      lastName: "",
      emailId: "",
    };
  }

   componentDidMount() {
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
             firstName: response.data.first_name,
             lastName: response.data.last_name,
             emailId: response.data.email,
           });
        });
      }


  render() {
    return (
      <div>
        <p>{this.state.user}</p>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.emailId}</p>
      </div>
    );
  }
}


