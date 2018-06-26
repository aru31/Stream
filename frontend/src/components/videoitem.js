import React, {Component} from 'react'

export default class VideoItem extends Component {
constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
}

componentDidMount(){
    this.connection = new WebSocket('ws://localhost:8000/ws/stream/')
    this.connection.onopen = () => { console.log('SEND_URL Socket Connected Succesfully') };
}

handleClick = (event) => {
    var id = this.props.video.id.videoId;
            var data_format =  {
            'url': id,
        }
    window.open("http://localhost:3000/stream"); 
    setTimeout(()=> {this.connection.send(JSON.stringify(data_format));}, 1000)       
    this.connection.send(JSON.stringify(data_format));
}

componentWillUnmount(){
this.connection.onclose = () => { console.error('SEND_URL Socket Closed!!')};
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
