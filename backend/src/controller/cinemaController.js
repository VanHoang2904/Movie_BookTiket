import Cinema from "../Model/Cinema"

const getAllCinema = async (req, res, next) => {
    try {
        const cinemas = await Cinema.find({})
        res.status(200).json(cinemas)
    } catch (error) {
        res.status(401).json("Có lỗi!")
        console.log(error)
    }
}

const getCinemaById = async (req,res, next) => {
    try {
        const cinema = await Cinema.findById(req.params.id)
        res.status(200).json(cinema)
    } catch (error) {
        res.status(401).json("Lỗi server")
    }
}

module.exports = {getAllCinema, getCinemaById}