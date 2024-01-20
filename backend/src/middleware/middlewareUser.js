const jwt = require("jsonwebtoken")

const middlewareUser = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token
        if (token) {
            const accessToken = token.split(" ")[1]
            jwt.verify(accessToken, process.env.ACCESSKEY, (err, user) => {
                if (err) {
                    console.log(err)
                    res.status(403).json("Token is no valid")
                }
                req.user = user;
                next();
            })
        }
        else res.status(401).json("You're not authenticated")
    }
}

module.exports = {middlewareUser}