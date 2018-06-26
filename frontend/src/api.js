import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Searchbox extends React.Component {
constructor() {
    super();
    this.state = {
      searchText: '',
      videoid: ''
    };
  }

 handleSearchClick = (e) => {
    e.preventDefault();
    var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=";
    var key = "AIzaSyC8Ga_Sq2z0eeTZPYDHZd5ii5RQxgmXOVM";
    var searchresult = this.state.searchText;
    var fullUrl = url + key + "&maxResults=" + 5 + "&q=" + searchresult;

   axios.get(fullUrl + ".json")
  .then(function (response) {

  $("#results").html("");
    $.each(response.data.items, function(index, item) {
       this.setState({videoid: item.VideoId});
          }); 

  })
  .catch(function (error) {
    console.log(error);
  });

       };



  handleInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <input type="text" id="search" value={this.state.searchText} onChange={this.handleInputChange} />
          <input type="submit" value="Damn" onClick={this.handleSearchClick} />
      <div id="results">
         <div className="item">
                <iframe className="video w100" width="640" height="360" src="//www.youtube.com/embed/{{this.state.videoid}}"></iframe>
         </div>
      </div>

        </form>
      </div>
    );
  }
}

export default Searchbox;
