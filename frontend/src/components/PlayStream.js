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
      seek: "",
      duration: "",
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
      seek: this.state.seek,
      duration: this.state.duration,
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
      seek: this.state.seek,
      duration: this.state.duration,
     }
    streamSocket.send(JSON.stringify(data));
    });
  }

  handleChange = (event) => {
    this.setState ({
      seek: event.target.value
    }, () => {
    var data = {
      play: this.state.play,
      url: this.state.url,
      mute: this.state.mute,
      seek: this.state.seek,
      duration: this.state.duration,
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
             seek: data['seek'],
             duration: data['duration'],
        });
    }

}



  render() {
    return (
      <div>
        <div>
            <i className={this.state.play ? "fa fa-pause-circle" : "fa fa-play-circle"} onClick={this.handlePlay}></i>
        </div>
        <div>
        <i className={this.state.mute ? "fa fa-volume-off" : "fa fa-volume-up"} onClick={this.handleMute}></i>
      </div>
      <div>
        <input type="range" min="0" max={this.state.duration} value={this.state.seek} onChange={this.handleChange} />
         <p>{this.state.seek}</p>
         <p>{this.state.duration}</p>
      </div>
      </div>
    ); 
  } 
}







