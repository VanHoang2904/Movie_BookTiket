import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Cinema() {
  const [cinemas, setCinemas] = useState()
  const [movies, setMovies] = useState()
  const [idCinema, setIdCinema] = useState("65ab485abb7dbeba32cc1ebe")
  const [current, setCurrent] = useState()
  const [name, setName] = useState()
  const [address, setAddress] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("https://backend-5bd7.onrender.com/cinema")
    .then(res => setCinemas(res.data))
    .catch(err => console.log(err))

   
  }, [])
  const getMovieByCinema = (id, name, address) => {
    axios.get(`https://backend-5bd7.onrender.com/movie/cinema/${id}`)
    .then(res => {
      setMovies(res.data)
      setIdCinema(id)
    })
    .catch(err => console.log(err))
    setCurrent(id)
    setName(name)
    setAddress(address)
  }
    return (
      <div className="flex items-start bg-black bg-opacity-25 w-full">
        {cinemas && (
          <div className="flex w-full">
            <div className="flex px-4 flex-col border-r-2 border-red-400">
              <img
                className="w-16 cursor-pointer py-2 object-contain"
                src="https://stc.shopiness.vn/brand/2019/01/18/c/8/a/1/1547803357844.png"
                alt=""
              />
              <img
                className="w-16 cursor-pointer py-2 object-contain"
                src="https://stc.shopiness.vn/brand/2019/01/18/c/8/a/1/1547803357844.png"
                alt=""
              />
            </div>
            <div className="w-2/5 border-r-2 mr-2">
              {cinemas.map(cinema => {
                return (
                  <button onClick={() => getMovieByCinema(cinema._id, cinema.name, cinema.address)} className={`px-10 hover:bg-orange-500 pt-3 text-white flex flex-col  justify-start items-start  border-b-red-500 border-solid border-b-2 border-r-blue-500 boder-r-2 pb-3 w-auto ${current === cinema._id && "bg-orange-500"}`}>
                <div className="text-sm" v>
                 {cinema.name}
                </div>
                <div className="text-sm text-left" v>
                  {cinema.address}
                </div>
              </button>
                )
              })}
              
            </div>
            <div>
              {movies && movies.map(movie => {
                return (
                  <div className="flex-1 flex justify-start mb-2">
                <img
                  className="w-28 h-36"
                  src= {`https://image.tmdb.org/t/p/w500/${movie.posterPath}`}
                  alt=""
                />
                <div className="ml-3 text-left">
                  <h1 className="">{movie.title}</h1>
                  {movie.cinema && movie.cinema.map(date => {
                      return (
                        date.id === idCinema && date.date.map(day => {
                        
                          return (
                  <h2 onClick={() => navigate(`/booking/${movie.id}/${movie.title}/${name}/${address}/${day}`)} className="bg-yellow-50 px-4 py-2 mt-2 rounded-sm cursor-pointer hover:bg-opacity-15  ">
                            {day}
                  </h2>
                          )
                        })
                      )
                    })}
                </div>
              </div>
                )
              })}
              
            </div>
          </div>
        )}
      
      </div>
    );
}

export default Cinema;