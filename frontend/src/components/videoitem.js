import React, {Component} from 'react'
import { streamSocket } from './socket.js';


export default class VideoItem extends Component {
constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
}


handleClick = (event) => {
    var id = this.props.video.id.videoId;
    var title = this.props.video.snippet.title;
    var thumbnail = this.props.video.snippet.thumbnails.default.url;
            var data_format =  {
            url: id,
            play: true,
            mute: false,
            seek: 0,
            duration: "",
            volume: 10,
            title: title,
            thumbnail: thumbnail,
        } 
    streamSocket.send(JSON.stringify(data_format));
}


render(){
    return(
       <div className="videoresult" id={this.props.video.id.videoId} onClick={this.handleClick}>
       <img className="image" src={this.props.video.snippet.thumbnails.default.url} />
       <span className="title">{this.props.video.snippet.title}</span>
</div>
  );
 }
}
