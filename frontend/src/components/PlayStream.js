import React, {Component} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { streamSocket } from './socket.js';

export default class PlayStream extends Component {
  constructor(props){
    super(props);
    this.state = ({
      play: true,
      url: "",
    })
  }


  handlePlay = () => {
    this.setState ({
      play: !this.state.play
    }, () => {
    var data = {
      play: this.state.play,
      url: this.state.url,
     }
    streamSocket.send(JSON.stringify(data));    
    });
  }

componentDidMount(){
    streamSocket.onopen = (e) => { console.log('Play socket') };

    streamSocket.onmessage = (e) => {
        var data = JSON.parse(e.data);
        this.setState({
             play: data['play'],
             url: data['url'],
        });
    }

}



  render() {
    return (
      <div>
        <i className={this.state.play ? "fa fa-pause-circle" : "fa fa-play-circle"} onClick={this.handlePlay}></i>
      </div>
    ); 
  } 
}

