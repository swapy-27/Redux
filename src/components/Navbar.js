import React from "react";
import { addMovieToList, handleMovieSearch } from "../actions";
import '../index.css'
import { movies } from "../reducers";
class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            searchtext: ''
        }
    }
    handleAddToMovies = (movie) => {

        this.props.dispatch(addMovieToList(movie))

    }
    handleSearch = () => {
        const { searchtext } = this.state
        this.props.dispatch(handleMovieSearch(searchtext))
    }
    handleChange = (e) => {
        this.setState(
            {
                searchtext: e.target.value
            }
        )
    }
    render() {
        const { result: movie, showSearchResults } = this.props.search;
        return (
            <div className="nav">
                <div className="search-container">

                    <input name="search_input" onChange={this.handleChange} />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>

                    {showSearchResults &&
                        <div className="search-results">
                            <div className="search-result">
                                <div className="movie-info">
                                    <img src={movie.Poster} alt="search-pic" />
                                    <span>
                                        {movie.Title}
                                    </span>
                                    <button className=" " onClick={() => this.handleAddToMovies(movie)}>
                                        Add To Movies
                                    </button>
                                </div>


                            </div>


                        </div>
                    }
                </div>
            </div>
        )
    }
}
export default Navbar;