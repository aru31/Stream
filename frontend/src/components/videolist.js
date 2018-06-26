import React, { Component } from 'react'
import VideoItem from './videoitem'

export default class VideoList extends Component{


render(){
return (
    <div className="searchlist">
      {this.props.videos.map(video =>( 
        <VideoItem key={video.id.videoId} video={video}/>
     ))}
    </div>
);
}
} 
