import React, { Component } from "react";
import Like from "../components/common/like";
import Table from "../components/common/table";
import { Link } from "react-router-dom";
import auth from "./../services/authService";
class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/Movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      path: "liked",
      label: "Like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
  ];
  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button
        onClick={() => this.props.onDelete(movie)}
        type="button"
        class="btn btn-danger btn-sm">
        Delete
      </button>
    ),
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }
  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        data={movies}
        onSort={onSort}
        sortColumn={sortColumn}
        columns={this.columns}
      />
    );
  }
}

export default MoviesTable;
