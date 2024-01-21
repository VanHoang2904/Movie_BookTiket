const jwt = require("jsonwebtoken")

const middlewareUser = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token  
        if (token) {
            console.log(req.headers)
            const accessToken = token.split(" ")[1]
            jwt.verify(accessToken, process.env.ACCESSKEY, (err, user) => {
                if (err) {
            console.log(accessToken)

                    res.json({
                        status: 403,
                        message: "Token is no valid"
                    })
                }
               else {
                req.user = user;
                next();
               }
            })
        }
        else {
        console.log(req.headers,)
        res.json({
            status: 301,
            message: "You're not authenticated"
        })

        }
    }
}

module.exports = {middlewareUser}