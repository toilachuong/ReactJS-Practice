import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  };
  render() {
    console.log(this.state.term);
    return (
      <div style={{ marginTop: "20px" }} className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label>Search Videos here...</label>
          <input
            onChange={e => this.setState({ term: e.target.value })}
            value={this.state.term}
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
