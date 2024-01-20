import User from "../Model/User"
const jwt = require('jsonwebtoken')
require("dotenv").config()


const getAll = async (req, res, next) => {
    try {
        const user =  await User.find()
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}

const genrateAcessToken = (other) => {
    return jwt.sign({
        other    
        }, process.env.ACCESSKEY, {expiresIn: "60s"})
}

const genrateRefershToken = (user) => {
    return jwt.sign({
        user,
            
        }, process.env.REFRESHTOKEN, {expiresIn: "1d"})
}

const user = async (req, res, next) => {
        try {
            

            const user = await User.findOne({email: req.body.email})
            
            if (user === null) {
                res.status(201).json("Tài khoản chưa được đăng ký")
            }
            else {
            
                if (req.body.password == user.password) {
                    const {password, ...other} = user._doc
                   const accessToken = genrateAcessToken(other)
                    const refreshToken = genrateRefershToken(other)
                    res.cookie("refreshToken", refreshToken, {
                        httpOnly: true,
                        secure: false, //deploy set true
                        path: "/",
                        sameSite: "strict"
                    })
                    res.status(200).json({accessToken, ...other} )
    
                }
                else {
                    res.status(201).json("Sai tên đăng nhập hoặc mật khẩu")
                }
            }
        } catch (error) {
            console.log(error)
        }
}


const checkEmailExists = async (email) => {
    try {
        const user = await User.findOne({email: email})
        console.log(user)
       return user;
    } catch (error) {
        console.log(error)
    }
}


const userRegister = async (req, res, next) => {
    try {
        const check = await checkEmailExists(req.body.email)
        if (check) {
           return res.status(201).json("Email đã tồn tại")
        }
       else {
        console.log(check)

        const user = new User(req.body)
        await user.save()
        res.status(200).json("Đăng ký thành công")
       }
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {user, userRegister, getAll}