import { Link, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Cinema from "../Cinema/Cinema";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import YouTube from 'react-youtube';


function MovieDetail() {
  const {id} = useParams()
  const [movie, setMovie] = useState()
  const [cinemas, setCinemas] = useState([])
  const [cinemaId, setCinemaId] = useState()
  const [nameCinema, setNameCinema] = useState()
  const [addressCinema, setAddressCinema] = useState()
  const [showtime, setShowTime] = useState()
  const [bgVideo, setbgVideo] = useState("hidden")
  const youtubeRef = useRef(null);
  useEffect(() => {
    axios.get(`https://backend-5bd7.onrender.com/movie/${id}`)
      .then(res => {
        if (res.status === 200) {
          setMovie(res.data);
          const cinemaPromises = res.data.cinema.map(cinema => {
            return axios.get(`https://backend-5bd7.onrender.com/cinema/${cinema.id}`)
              .then(res => res.data);
          });
  
          Promise.all(cinemaPromises)
            .then(cinemaData => {
              setCinemas(cinemas => [...cinemas, ...cinemaData]);
            })
            .catch(err => console.log(err));
        } else {
          console.log(res);
        }
      })
      .catch(err => console.log(err));
  }, []);
 
    return (
      <div className="w-full h-full">
        {movie != null && (
          <div className="w-full h-full relative">
            <img
              className="w-full h-full object-cover blur"
              src={`https://image.tmdb.org/t/p/w500/${movie.backdropPath}`}
              alt="background"
            />
            <div className="absolute w-3/4 py-10 px-3 top-40 bg-black bg-opacity-30 left-1/2 -translate-x-1/2">
              <div className="flex justify-start w-full">
                <img
                  className="w-32"
                  src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`}
                  alt=""
                />
                <div className="overflow-hidden">
                  <h1 className="ml-2 text-2xl text-white text-left">
                    {movie.title}
                  </h1>
                  <p className="ml-2 leading-6 break-words text-left text-md text-white text-opacity-25 w-full">
                    {movie.overView}
                  </p>
                  <div className="flex mt-3 ">
                    <button
                      onClick={() => setbgVideo("block")}
                      className="hover:bg-red-500 outline-none  border-red-500 border-2 w-52 text-white py-2 ml-2 mr-3 border-solid uppercase"
                    >
                      Trailer
                    </button>
                    <Link
                      to={`/booking/${movie.idMovie}/${movie.title}/${nameCinema}/${addressCinema}/${showtime}`}
                      className="hover:bg-blue-500 outline-none  border-blue-500 border-2 w-52 text-white py-2 mr-3 border-solid uppercase"
                    >
                      Đặt vé
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <div className="flex items-start bg-black bg-opacity-25 w-full">
                  {movie && (
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
                      <div className="w-2/5 px-10 border-r-">
                        {cinemas &&
                          cinemas.map((cinema) => {
                            console.log(cinemas);
                            return (
                              <button
                                onClick={() => {
                                  setCinemaId(cinema._id);
                                  setNameCinema(cinema.name);
                                  setAddressCinema(cinema.address);
                                }}
                                key={cinema._id}
                                className="pt-3 text-white flex flex-col  justify-start items-start  border-b-red-500 border-solid border-b-2 border-r-blue-500 boder-r-2 pb-3 w-auto"
                              >
                                <div className="text-sm">{cinema.name}</div>
                                <div className="text-sm text-left" v>
                                  {cinema.address}
                                </div>
                              </button>
                            );
                          })}
                      </div>
                      <div>
                        {movie &&
                          movie.cinema.map((showtime) => {
                            return (
                              showtime.id === cinemaId &&
                              showtime.date.map((day) => {
                                console.log(cinemaId);
                                return (
                                  <h2
                                    onClick={() => {
                                      setShowTime(day);
                                    }}
                                    className="bg-yellow-50 px-4 py-2 mt-2 rounded-sm cursor-pointer hover:bg-opacity-15  "
                                  >
                                    {day}
                                  </h2>
                                );
                              })
                            );
                          })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          onClick={() => {
            setbgVideo("hidden");
            if (youtubeRef.current) {
              if (document.visibilityState === "hidden" && youtubeRef.current) {
                youtubeRef.current.internalPlayer.pauseVideo();
              }
            }
          }}
          className={`${bgVideo} absolute top-0 bg-black bg-opacity-70 w-full h-full`}
        >
          <YouTube
            className={`${bgVideo} absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
            videoId={movie && movie.key}
            opts={{
              height: "390",
              width: "640",
              playerVars: {
                autoplay: 0,
              },

            }}
            onStateChange={(event) => {if (event.data === window.YT.PlayerState.PAUSED) {
      console.log('Video is paused');
    } }}
          />
        </div>
      </div>
    );
}

export default MovieDetail;