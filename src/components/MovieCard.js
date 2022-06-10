import React from "react";
import { addFavourites,removeFavourite } from "../actions";

class MovieCard extends React.Component {
    addFavourites = () => {
        const { movie } = this.props;

        this.props.dispatch(addFavourites(movie));
    }
    removeFavourite=()=>{
        const { movie } = this.props;

        this.props.dispatch(removeFavourite(movie));
    }
  
    render() {
        const { movie,isFav } = this.props;
       
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>

                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {isFav 
                        ? <button className="unfavourite-btn" onClick={this.removeFavourite}>Remove-Fav</button>
                        :<button className="favourite-btn" onClick={this.addFavourites}>Favourite</button>}
                        
                    </div>
                </div>
            </div>
        )
    }


}

export default MovieCard;