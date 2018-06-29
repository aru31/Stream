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
      console.log(url);
      console.log(play);
      console.log(mute);

      this.setState ({
          url: url,
          play: play,
          mute: mute,
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
    };
    streamSocket.send(JSON.stringify(data));
  }
  
  

  
  render() {
    return(
    <ReactPlayer className="media"
      url={urlf+this.state.url}
      playing={this.state.play}
      onPlay={this.handlePlay}
      onPause={this.handlePause}
      muted={this.state.mute}
      width="100%"
      height="100%"
    />
    );
  }
}
