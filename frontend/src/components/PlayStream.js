import React, {Component} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { streamSocket } from './socket.js';

export default class PlayStream extends Component {
  constructor(props){
    super(props);
    this.state = ({
      play: true,
      url: "",
      mute: false,
    })
  }


  handlePlay = () => {
    this.setState ({
      play: !this.state.play
    }, () => {
    var data = {
      play: this.state.play,
      url: this.state.url,
      mute: this.state.mute,
     }
    streamSocket.send(JSON.stringify(data));    
    });
  }

  handleMute = () => {
    this.setState ({
      mute: !this.state.mute
    }, () => {
    var data = {
      play: this.state.play,
      url: this.state.url,
      mute: this.state.mute,
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
             mute: data['mute'],
        });
    }

}



  render() {
    return (
      <div>
        <i className={this.state.play ? "fa fa-pause-circle" : "fa fa-play-circle"} onClick={this.handlePlay}></i>
        <i className={this.state.mute ? "fa fa-volume-off" : "fa fa-volume-up"} onClick={this.handleMute}></i>
      </div>
    ); 
  } 
}
