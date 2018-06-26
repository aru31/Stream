import React from 'react';
import ReactPlayer from 'react-player';


export default class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      play: true,
    };
  }

  componentWillMount() {
    this.connection = new WebSocket('ws://localhost:8000/ws/stream/');
    this.connection.onopen = (e) => {
       console.log("Connection Made");
}
    this.connection.onmessage = (e) => {
      var data = JSON.parse(e.data);
      var url = data['url']
      url = "https://www.youtube.com/watch?v=" + url;
      console.log(url);
      this.setState ({
          url: url
        })
      }
    
  }
  
  render() {
    return(
    <ReactPlayer className="media"
      url={this.state.url}
      playing={this.state.play}
      width="100%"
      height="100%"
    />
    );
  }
}
