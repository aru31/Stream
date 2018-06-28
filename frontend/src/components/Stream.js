import React from 'react';
import ReactPlayer from 'react-player';


export default class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      play: true,
    };
    this.connection = new WebSocket('ws://localhost:8000/ws/stream/');

  }

  componentDidMount() {
    this.connection.onopen = (e) => {
       console.log("Connection Made");
}

    this.connection.onmessage = (e) => {
      var data = JSON.parse(e.data);
      var url = data['url']
      var play = data['play']
      url = "https://www.youtube.com/watch?v=" + url;
      console.log(url);
      console.log(play);

      this.setState ({
          url: url,
          play: play,
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
    };
    this.connection.send(JSON.stringify(data));
  }

  handlePause = () => {
    this.setState({
      play: false,
    });
    var data = {
      play: this.state.play,
      url: this.state.url,
    };
    this.connection.send(JSON.stringify(data));
  }
  
  

  
  render() {
    return(
    <ReactPlayer className="media"
      url={this.state.url}
      playing={this.state.play}
      onPlay={this.handlePlay}
      onPause={this.handlePause}
      width="100%"
      height="100%"
    />
    );
  }
}
