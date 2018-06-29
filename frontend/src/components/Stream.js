import React from 'react';
import ReactPlayer from 'react-player';
import { streamSocket } from './socket.js';

const urlf = "https://www.youtube.com/watch?v=";


export default class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      play: true,
      mute: false,
      seek: "",
      duration: "",
    };

  }

  componentDidMount() {
    streamSocket.onopen = (e) => {
       console.log("Connection Made");
}

    streamSocket.onmessage = (e) => {
      var data = JSON.parse(e.data);
      var url = data['url']
      var play = data['play']
      var mute = data['mute']
      var seek = data['seek']
      var duration = data['duration']
      console.log(url);
      console.log(play);
      console.log(mute);
      console.log(seek);
      console.log(duration);

      this.setState ({
          url: url,
          play: play,
          mute: mute,
          seek: seek,
          duration: duration,
        })
      }
    
  }

  handlePlay = () => {
    this.setState({
      play: true,
    });
    var data = {
      play: this.state.play,
      url: this.state.url,
      mute: this.state.mute,
      seek: this.state.seek,
      duration: this.state.duration,
    };
    streamSocket.send(JSON.stringify(data));
  }

  handlePause = () => {
    this.setState({
      play: false,
    });
    var data = {
      play: this.state.play,
      url: this.state.url,
      mute: this.state.mute,
      seek: this.state.seek,
      duration: this.state.duration,
    };
    streamSocket.send(JSON.stringify(data));
  }
  
   handleProgress = () => {
    this.setState({
      seek: parseInt(this.player.getCurrentTime()),
    });
    var data = {
      play: this.state.play,
      url: this.state.url,
      mute: this.state.mute,
      seek: this.state.seek,
      duration: this.state.duration,
    };
    streamSocket.send(JSON.stringify(data));
  }

   handleDuration = () => {
    this.setState({
      duration: parseInt(this.player.getDuration()),
    });
    var data = {
      play: this.state.play,
      url: this.state.url,
      mute: this.state.mute,
      seek: this.state.seek,
      duration: this.state.duration,
    };
    streamSocket.send(JSON.stringify(data));
  }

  
  ref = player => {
    this.player = player
  }


  render() {
    return(
    <ReactPlayer className="media"
      ref={this.ref}
      url={urlf+this.state.url}
      playing={this.state.play}
      onPlay={this.handlePlay}
      onPause={this.handlePause}
      muted={this.state.mute}
      width="100%"
      height="100%"
      onProgress={this.handleProgress}
      onDuration={this.handleDuration}
    />
    );
  }
}
