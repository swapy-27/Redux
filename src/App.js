import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import { data } from './data'
import React, { useEffect } from "react";
import { render } from "@testing-library/react";
import { addFavourites, addMovies } from "./actions";
import { StoreContext } from ".";

class App extends React.Component {
  state = {
    'favPage': true
  };

  componentDidMount() {
    const { store } = this.props
    store.subscribe(() => {

      this.forceUpdate();
    })

    store.dispatch(addMovies(data))
  }

  handleFavouriteBtnClick = () => {


    this.setState({ 'favPage': false })

  }
  handleMovieBtnClick = () => {


    this.setState({ 'favPage': true })

  }


  isMovieFavourite = (movie) => {

    const { favourites } = this.props.store.getState().movies;

    if (favourites.indexOf(movie) !== -1) {
      return true
    }
    return false
  }
  render() {
    const { movies } = this.props.store.getState();
    const { list, favourites } = movies;
    const dispatch = this.props.store.dispatch;

    const search = this.props.store.getState().search;


    return (

      <div className="App">
        <Navbar dispatch={dispatch} search={search} />

        <div className="main">
          <div className="tabs">
            <div className="tab" onClick={this.handleMovieBtnClick}>MOVIES</div>
            <div className="tab" onClick={this.handleFavouriteBtnClick}>FAVOURITES</div>
          </div>
          <div className="List">
            {this.state.favPage
              ? list.map((movie, idx) => {
                return <MovieCard movie={movie} key={idx} dispatch={this.props.store.dispatch} isFav={this.isMovieFavourite(movie)} />
              })
              : favourites.map((movie, idx) => {
                return <MovieCard movie={movie} key={idx} dispatch={this.props.store.dispatch} isFav={true} />
              })}
          </div>
        </div>
      </div>
    );
  }

}

class AppWrapper extends React.Component{
  render(){
    return (
      <StoreContext.Consumer>
        {(store) => <App store={store}/>}
      </StoreContext.Consumer>
    )
  }
}

export default AppWrapper;
