import Movie from "../Model/Movie"

const getAllMovie = async(req, res, next) => {
    try {
        Movie.find({}).then(movies => res.json(movies)).catch(next)
        
    } catch (error) {
        console.log(error)
    }
}

const getMovie = async(req, res, next) => {
    try {
        const movie = await Movie.findOne({idMovie: req.params.id})
        res.status(200).json(movie)
    } catch (error) {
        res.status(401).json("Lỗi server")
        console.log(error)
    }
}

const getMovieByCinema = async(req, res, next) => {
    try {
        const movies = await Movie.find({"cinema.id": req.params.id })
        res.status(200).json(movies)
    } catch (error) {
        res.status(401).json("Lỗi server")
        console.log(error)
    }
}


module.exports = {getAllMovie, getMovie, getMovieByCinema}


