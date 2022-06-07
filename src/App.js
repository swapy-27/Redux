import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import { data } from './data'
import React, { useEffect } from "react";
import { render } from "@testing-library/react";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props
    store.subscribe(() => {
    
      this.forceUpdate();
    })

    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data
    })
  }


  render() {
    const movies = this.props.store.getState();
    

    return (

      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">MOVIES</div>
            <div className="tab">FAVOURITES</div>
          </div>
          <div className="List">
            {movies.map((movie, idx) => {
              return <MovieCard movie={movie} key={idx} />
            })}
          </div>
        </div>
      </div>
    );
  }

}

export default App;
