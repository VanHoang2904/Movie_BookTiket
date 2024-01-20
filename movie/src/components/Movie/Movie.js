
import { Link } from "react-router-dom";


function Movie(props) {
    
    return (
      <div key={props.idMovie} className="w-48 cursor-pointer relative">
          <div className="group hover:bg-black h-full absolute w-full hover:bg-opacity-30">
          <div className="hidden group-hover:block absolute top-1/2  -translate-y-1/2 left-1/2 -translate-x-1/2  ">
              <Link to= {`/movie/${props.movie.idMovie}`} className="text-white py-3 px-4 hover:bg-red-500 border-2 border-solid border-white">Mua vé</Link>
           </div>
          </div>
          <img 
              src={`https://image.tmdb.org/t/p/w500/${props.movie.posterPath}`}
           alt = "anh" />
          
      </div>
    );
}

export default Movie;