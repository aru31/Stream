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
      seek: 0,
      duration: "",
      volume: 10,
      title: "",
      thumbnail: "",
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
      var volume = data['volume']
      var title = data['title']
      var thumbnail = data['thumbnail']

     seek = parseInt(seek);
     var previous = this.player.getCurrentTime();
   
     if(seek!==0){
       if((previous>=seek-5) && (previous<=seek+5)){ 
          void(0); //pass this value//
       }
       else{
          this.player.seekTo(seek);
           }
     }
     else{
        this.setState({ seek: seek });
     }
    
  
      console.log(url);
      console.log(play);
      console.log(mute);
      console.log(seek);
      console.log(duration);
      console.log(parseInt(this.player.getCurrentTime()));
      console.log(volume);
      console.log(title);
      console.log(thumbnail);

      this.setState ({
          url: url,
          play: play,
          mute: mute,
          duration: duration,
          volume: volume,
          title: title,
          thumbnail: thumbnail,
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
      volume: this.state.volume,
      title: this.state.title,
      thumbnail: this.state.thumbnail,
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
      volume: this.state.volume,
      title: this.state.title,
      thumbnail: this.state.thumbnail,
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
      volume: this.state.volume,
      title: this.state.title,
      thumbnail: this.state.thumbnail,
    };
    console.log("progress  "+data.play+" "+data.url+" "+data.mute+" "+data.seek+" "+data.duration+" "+data.volume);
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
      volume: this.state.volume,
      title: this.state.title,
      thumbnail: this.state.thumbnail,
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
      volume={this.state.volume/20}
    />
    );
  }
}
