import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">search</i>
          <textarea
            id="icon_prefix2"
            className="materialize-textarea"
            onChange={e => this.props.searchAction(e)}
          />
          <label for="icon_prefix2">Search</label>
        </div>
      </div>
    );
  }
}

export default Search;
