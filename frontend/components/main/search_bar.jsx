import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputVal: ""};
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({inputVal: e.currentTarget.value});
  }

  render () {
    const searchItems = ["Dave", "Donny", "Kurt", "Lion"];
    return (
    <div>
      <form>
        <input value={this.state.inputVal} onChange={this.handleInput} className="artist-search-bar"
          type="text" placeholder="Search for artist, track or album"></input>
        <span><FontAwesomeIcon className="search-icon" icon={faSearch} /></span>
      </form>
      {searchItems.map(item =>{
        if (this.state.inputVal.length > 0 &&
        item.slice(0, this.state.inputVal.length) === this.state.inputVal) {
          return (
            <ul className="search-results-list">
              {searchItems.map(item =>{
                if (this.state.inputVal.length > 0 &&
                  item.slice(0, this.state.inputVal.length) === this.state.inputVal) {
                    return (
                      <li>{item}</li>
                    );
                  }
                })
              }
            </ul>
          );
          }
      }
      )
      }
    </div>
);
  }


}
