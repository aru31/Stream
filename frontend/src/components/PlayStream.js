import React, {Component} from 'react'
import 'font-awesome/css/font-awesome.min.css';

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
    this.connection.send(JSON.stringify(data));    
    });
  }

componentDidMount(){
    this.connection = new WebSocket('ws://localhost:8000/ws/stream/')
    this.connection.onopen = (e) => { console.log('Play socket') };

    this.connection.onmessage = (e) => {
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

