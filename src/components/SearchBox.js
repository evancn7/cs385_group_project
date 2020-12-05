import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    const searchTermFromProps = this.props.searchTerm;
    const onChangeFromProps = this.props.onChange;
    const onButtonClick = this.props.onButtonClick;
    return (
      <div className="SearchBox">
        <input
          type="text"
          value={searchTermFromProps}
          onChange={onChangeFromProps}
          placeholder="Enter food item.."
        ></input>
        &nbsp;
        <button
          onClick={onButtonClick}
          type="button"
          className="btn btn-outline-danger"
        >
          Clear
        </button>
      </div>
    );
  }
}
export default SearchBox;
