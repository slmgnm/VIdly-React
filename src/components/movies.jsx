import React, { Component } from "react";
import { Link } from "react-router-dom";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import SearchBox from "./common/searchBox";
import _ from "lodash";
import { toast } from "react-toastify";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const { data } = await getGenres();
    const genres = [{ _id: "", name: "All Genres" }, ...data];

    const { data: movies } = await getMovies();
    this.setState({ movies, genres });
  }
  GenreHandle = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1, searchQuery: "" });
  };
  HandleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };
  deleteHandler = async (movie) => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter((m) => m._id !== movie._id);
    this.setState({ movies });

    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This movie has already been deleted.");

      this.setState({ movies: originalMovies });
    }
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  sortHandler = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getPagedData = () => {
    const {
      currentPage,
      pageSize,
      movies: allMovies,
      selectedGenre,
      sortColumn,
      searchQuery,
    } = this.state;

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLocaleLowerCase()),
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);
    // const filtered =
    //   selectedGenre && selectedGenre._id
    //     ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
    //     : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { TotalCount: filtered.length, data: movies };
  };
  render() {
    const { user } = this.props;
    const { length: count } = this.state.movies;
    const { currentPage, pageSize, sortColumn, searchQuery } = this.state;
    if (count === 0) return <p>There is no movies to show</p>;

    const { data: movies, TotalCount } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.GenreHandle}
          />
        </div>
        <div className="col">
          {user && (
            <Link
              to="/movies/New"
              className="btn btn-primary"
              style={{ marginBotton: 20 }}>
              New Movie
            </Link>
          )}
          <p>you have {TotalCount} movies in the list</p>

          <SearchBox value={searchQuery} onChange={this.HandleSearch} />
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.deleteHandler}
            onSort={this.sortHandler}
          />
          <Pagination
            itemsCount={TotalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
