import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import {data} from './data'
import { useEffect } from "react";
function App(props) {
  useEffect(()=>{
    const {store} = props

    store.subscribe(()=>{
      console.log('updated')
    })

    store.dispatch({
      type:'ADD_MOVIES',
      movies:data
    })

  })
  return (
    <div className="App">
     <Navbar/>
     <div className="main">
       <div className="tabs">
         <div className="tab">MOVIES</div>
         <div className="tab">FAVOURITES</div>
       </div>
       <div className="List">
         {data.map((movie,idx)=>{
          return <MovieCard movie = {movie} key ={idx}/>
         })}
       </div>
     </div>
    </div>
  );
}

export default App;
