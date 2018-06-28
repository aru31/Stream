import React, {Component} from 'react'
import { streamSocket } from './socket.js';


export default class VideoItem extends Component {
constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
}


handleClick = (event) => {
    var id = this.props.video.id.videoId;
            var data_format =  {
            url: id,
            play: true,
        } 
    streamSocket.send(JSON.stringify(data_format));
}


render(){
    return(
       <div className="VideoResult" id={this.props.video.id.videoId} onClick={this.handleClick}>
       <img className="image" src={this.props.video.snippet.thumbnails.default.url} />
       <div>{this.props.video.snippet.title}</div> 
       <div>{this.props.video.snippet.channelTitle}</div>  
</div>
);}
}
