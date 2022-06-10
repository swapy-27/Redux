import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import { data } from './data'
import React, { useEffect } from "react";
import { render } from "@testing-library/react";
import { addFavourites, addMovies } from "./actions";

class App extends React.Component {
  state={
    'favPage' : true};

  componentDidMount() {
    const { store } = this.props
    store.subscribe(() => {
    
      this.forceUpdate();
    })

    store.dispatch(addMovies(data))
  }

   handleFavouriteBtnClick = ()=>{

      this.setState(this.state,()=>{
        return {'favPage':true}
      })
    }

  

    

  isMovieFavourite = (movie) => {

    const { favourites } = this.props.store.getState();

    if (favourites.indexOf(movie) !== -1) {
        return true
    }
    return false
}
  render() {
    const {movies,favourites} = this.props.store.getState();
    
    return (

      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">MOVIES</div>
            <div className="tab" onClick={this.handleFavouriteBtnClick}>FAVOURITES</div>
          </div>
          <div className="List">
            {this.favPage
            ?movies.map((movie, idx) => {
              return <MovieCard movie={movie} key={idx} dispatch={this.props.store.dispatch} isFav = {this.isMovieFavourite(movie)} />
            })
            :favourites.map((movie, idx) => {
              return <MovieCard movie={movie} key={idx} dispatch={this.props.store.dispatch} isFav = {this.isMovieFavourite(movie)} />
            })}
          </div>
        </div>
      </div>
    );
  }

}

export default App;
