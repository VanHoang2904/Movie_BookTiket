const jwt = require("jsonwebtoken")

const middlewareUser = {
    verifyToken: (req, res, next) => {
        console.log(req.body)
        const token = req.headers.token 
        if (token) {
            const accessToken = token.split(" ")[1]
            console.log(accessToken)
            jwt.verify(accessToken, process.env.ACCESSKEY, (err, user) => {
                if (err) {
                    res.status(403).json("Token is no valid")
                }
                req.user = user;
                next();
            })
        }
        else res.status(300).json("You're not authenticated")
    }
}

module.exports = {middlewareUser}