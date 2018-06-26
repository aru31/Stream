import React, {Component} from 'react'

import searchYouTube from 'youtube-api-search'
import VideoList from "./videolist"

const API_KEY = "AIzaSyC8Ga_Sq2z0eeTZPYDHZd5ii5RQxgmXOVM"

class SearchBar extends Component {
  constructor(props){
        super(props);
        this.state = ({
           videos: []
        });
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

  handleChange = (event) => {
     if(event.target.value === ""){
        this.setState({
           videos: []
        });
     }
     else{
      searchYouTube({key: API_KEY, term: event.target.value}, (videos) => {
          this.setState({
              videos: videos,
          });

      });

    }
}

  
  handleClick = (e) => {
    var Search = document.getElementById('searchBar');
    Search.value = "";
    this.setState({
        videos: []   
      })
    }


  render() {

    return (
        <div>
            <input type="search" onChange={this.handleChange} id="searchBar"/>
            <div onClick={this.handleClick}>
            <VideoList videos={this.state.videos} />
        </div></div>
    );
  }

}

export default SearchBar;
