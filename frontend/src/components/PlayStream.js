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
      seek: 0,
      duration: "",
      volume: "",
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
      volume: this.state.volume,
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
      volume: this.state.volume,
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
      volume: this.state.volume,
     }
   console.log("handleSeek  "+data.play+" "+data.url+" "+data.mute+" "+data.seek+" "+data.duration+" "+data.volume);
    streamSocket.send(JSON.stringify(data));
    });
  }

  handleVolume = (event) => {
    this.setState ({
      volume: event.target.value
    }, () => {
    var data = {
      play: this.state.play,
      url: this.state.url,
      mute: this.state.mute,
      seek: this.state.seek,
      duration: this.state.duration,
      volume: this.state.volume,
     }
    streamSocket.send(JSON.stringify(data));
    });
  }

componentDidMount(){
    streamSocket.onopen = (e) => { console.log('Play socket') };

    streamSocket.onmessage = (e) => {
        var data = JSON.parse(e.data);
        console.log("Seek  "+data.play+" "+data.url+" "+data.mute+" "+data.seek+" "+data.duration+" "+data.volume);
        this.setState({
             play: data['play'],
             url: data['url'],
             mute: data['mute'],
             seek: data['seek'],
             duration: data['duration'],
             volume: data['volume'],
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
      </div>
      <div>
        <input type="range" min="0" max="20" value={this.state.volume} onChange={this.handleVolume} />
      </div>
         <p>{this.state.volume}</p>
         <p>{this.state.seek}</p>
         <p>{this.state.duration}</p>
    </div>
    ); 
  } 
}


