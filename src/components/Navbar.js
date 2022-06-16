import React from "react";
import { addMovieToList, handleMovieSearch } from "../actions";
import '../index.css'
import { movies } from "../reducers";
class Navbar extends React.Component {
   
    constructor(props) {
        super(props)
        this.state = {
            showSearchResult:true,
            searchtext:''
        }
    }
    handleSearch = () => {
        const movie = handleMovieSearch(this.state.searchtext)
        this.props.dispatch(addMovieToList(movie))
        this.setState(
            {
                showSearchResult:false
            }
        )
    }
    handleChange=(e)=>{
        this.setState(
            {
                searchtext:e.target.value
            }
        )
    }
    render() {
        return (
            <div className="nav">
                <div className="search-container">

                    <input name="search_input" onChange={this.handleChange} />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                </div>
            </div>
        )
    }
}
export default Navbar;