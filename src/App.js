import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import {data} from './data'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className="main">
       <div className="tabs">
         <div className="tab"></div>
         <div className="tab"></div>
       </div>
       <div className="List">
         {data.map((movie)=>{
          return <MovieCard movie = {movie}/>
         })}
       </div>
     </div>
    </div>
  );
}

export default App;
