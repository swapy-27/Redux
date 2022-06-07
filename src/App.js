import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import {data} from './data'
function App() {
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
