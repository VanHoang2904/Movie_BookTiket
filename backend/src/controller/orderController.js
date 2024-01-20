import User from "../Model/User"


const order = async (req, res, next) => {
    try {
        const update = {
            
            idOrder: 1,
            idMovie: req.body.idMovie,
            name: req.body.name,
            address: req.body.address,
            situation: false,
            dateOrder: Date.now,
            chair: req.body.chair
        }
      const newOrder = await User.findOneAndUpdate({_id: req.body.id}, 
        { $push: { orderDetail: update } }
      ,  {
        new: true,
      
      });
      res.status(200).json(newOrder)
    } catch (error) {
        res.json("Lỗi server")
        console.log(error)
    }
}

module.exports = {order}