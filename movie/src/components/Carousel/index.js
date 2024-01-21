import { Carousel } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Slider() {
    
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/movie")
      .then((res) => {
          setMovies(res.data.splice(0,2))
      })
  }, [])
    return ( 
        <Carousel className="overflow-hidden bg-black mb-10">
         {movies.map(movie => {
          return (
            <div className="relative">
            <div className="absolute bg-black bg-opacity-20 w-full h-full"></div>
            <img
              src= {`https://image.tmdb.org/t/p/w500/${movie.backdropPath}`}
              alt="image1"
              className="h-full w-full object-contain"
            />
            <div className="absolute h-full w-2/5 top-1/3 z-8 left-20">
              <h1 className="text-white font-bold text-start text-2xl">
                {movie.title}
              </h1>
              <div className="w-full mt-5">
                <div className="text-white max-w-full break-words text-left">
                  {movie.overView}

                </div>
              </div>
              <div className='flex mt-5 justify-evenly'>
                <Link to={`/movie/${movie.idMovie}`} className='text-white border-solid border-white border-2 py-3 w-36 rounded-3xl hover:bg-red-500 hover:border-red-500 shadow-xl hover:shadow-red-300'>Xem Trailer</Link>
                <Link to ={`/movie/${movie.idMovie}`} className='text-white border-solid border-white border-2 py-3 w-36 rounded-3xl hover:bg-red-500 hover:border-red-500 shadow-xl hover:shadow-red-300'>Đặt vé</Link>
              </div>
             
            </div>
            <div className='absolute w-3/12 right-24 top-1/2 -translate-y-1/2 rounded-2xl overflow-hidden'>
                <img className = "w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`}  alt='poster'/>
              </div>
          </div>
          )
         })}
          
        </Carousel>
     );
}

export default Slider;