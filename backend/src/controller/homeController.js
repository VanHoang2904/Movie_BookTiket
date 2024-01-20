import User from "../Model/User"

const homePage = async (req, res, next) => {
  try {
        User.find({}).then(users => res.json(users)).catch(next)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
    homePage
}