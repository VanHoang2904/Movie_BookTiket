import { useEffect, useState } from "react";
import Slider from "../../components/Carousel";
import Cinema from "../../components/Cinema/Cinema";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Movie from "../../components/Movie/Movie";
import Search from "../../components/Search/Search";
import axios from "axios";

function Home() {
  const [movies, setMovies] = useState([])
    useEffect(() => {
      axios.get("https://backend-5bd7.onrender.com/movie")
        .then((res) => {
            setMovies(res.data)
        })
    }, [])
    return (
      <div>
        <Slider />
        <div className="px-56">
          <Search />
        </div>
        <div id="phim" className="flex ml-10">
          <div className="mr-3 uppercase border-b-2 border-solid border-red-500 mb-10 cursor-pointer">
            Phim đang chiếu
          </div>
          <div className="uppercase cursor-pointer">Phim sắp chiếu</div>
        </div>

        <div className="flex flex-wrap justify-start mb-10">
          {movies.map((movie) => (
            <div className="px-4">
              <Movie key={movie._id} movie={movie} />
            </div>
          ))}
        </div>
        <div id="cinema" className="shadow-lg mb-10 w-3/4 relative left-1/2 -translate-x-1/2">
          <Cinema />
        </div>

        <Footer />
      </div>
    );
}

export default Home;