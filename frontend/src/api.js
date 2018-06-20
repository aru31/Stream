import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

class Searchbox extends React.Component {
constructor() {
    super();
    this.state = {
      searchText: ''
    };
  }

 handleSearchClick = (e) => {
    e.preventDefault();
    var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=";
    var key = "AIzaSyC8Ga_Sq2z0eeTZPYDHZd5ii5RQxgmXOVM";
    var searchresult = this.state.searchText;
    var fullUrl = url + key + "&maxResults=" + 5 + "&q=" + searchresult;

   axios.get(fullUrl)
  .then(function (response) {
    console.log(response);
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
        </form>
      </div>
    );
  }
}

export default Searchbox;
