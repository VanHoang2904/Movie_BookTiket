import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [movies, setMovies] = useState([])
  const [cinemas, setCinemas] = useState([])
  const [showtime, setShowTime] = useState()
  const [currentMovie, setCurrentMovie] = useState()
  const [currentCinema, setCurrentCinema] = useState()
  const [currentShowTime, setCurrentShowTime] = useState()
  useEffect(() => {
    axios.get("https://movie-back-end-yhp8.onrender.com/movie")
      .then((res) => {
          setMovies(res.data)
      })
      .catch(err => console.log(err))

        axios.get("https://movie-back-end-yhp8.onrender.com/cinema")
        .then(res => setCinemas(res.data))
        .catch(err => console.log(err))

  }, [])
  const getCinemaById = (id) => {
    axios.get(`axios.get("https://movie-back-end-yhp8.onrender.com/cinema/${id}`)
    .then(res => setCinemas([...cinemas, res.data]))
    .catch(err => console.log(err))
  }
    return (
      <div className="shadow-xl mb-8 rounded-xl flex  justify-evenly py-2 m-auto">
        <select className="w-60 py-3 outline-none rounded-xl px-2 border-black border-2">
          <option  className= "px-2" value="volvo">Phim</option>
          {movies.map(movie => {
            return (
              <option onClick={() => {
                setCurrentMovie(movie._id)
                setCinemas()
                getCinemaById()
              }
                    
              } className="">{movie.title}</option>
            )
          })}
        </select>
        <select className="w-60 py-3 outline-none rounded-xl px-2 border-black border-2">
          <option  className= "px-2" value="volvo">Rạp</option>
          {cinemas.map(cinema => {
            return (
              <option >{cinema.name}</option>
            )
          })}
        </select>
        <select className="w-60 py-3 outline-none rounded-xl px-2 border-black border-2">
          <option  className= "px-2" value="volvo">Giờ chiếu</option>
          <option  className= "px-2" value="saab">Saab</option>
          <option  className= "px-2" value="opel">Opel</option>
          <option  className= "px-2" value="audi">Audi</option>
        </select>
        <Link className="bg-orange-500 flex items-center px-4 rounded-md text-white font-bold hover:bg-opacity-70">Mua vé</Link>
      </div>
    );
}

export default Search;