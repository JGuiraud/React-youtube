import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class SearchBar extends Component {

   constructor(props) {
      super(props);
      this.state = { searchTerm: '' };
   }

   render() {
      return (
         <div className="search-bar">

            <input
               value={this.state.searchTerm}
               onChange={event => this.handleInputChange(event.target.value)}
            />
            <button onClick={this.handleClickSearch}><FontAwesome name="search" /></button>
         </div>
      )
   }

   handleInputChange = (term) => {
      this.setState({ searchTerm: term });
   }

   handleClickSearch = () => {
      this.props.onSearchTermChange(this.state.searchTerm);
   }
}

export default SearchBar;