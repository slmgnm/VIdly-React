import React, { Component } from "react";

class MoviesDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    //this.props.history.push("/products");
    this.props.history.push("/Movies");
  };

  render() {
    return (
      <div>
        <h1>Movies Details - {this.props.match.params.id} </h1>
        <button className="btn btn-primary" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}

export default MoviesDetails;
