import express from "express";
import userController from "../controller/userController";
import movieController from "../controller/movieController"
import homeController from "../controller/homeController";
import cinemaController from "../controller/cinemaController"
import orderController from "../controller/orderController"
import { middlewareUser } from "../middleware/middlewareUser";

const router = express.Router()

const apiRouter = (app) => { 
    router.get("/user/getall", middlewareUser.verifyToken, userController.getAll);
    router.post("/user", userController.user)
    router.post("/user/register",middlewareUser.verifyToken ,userController.userRegister)
    router.get("/movie", movieController.getAllMovie)
    router.get("/movie/:id", movieController.getMovie)
    router.get("/movie/cinema/:id", movieController.getMovieByCinema)
    router.get("/cinema", cinemaController.getAllCinema)
    router.get("/cinema/:id", cinemaController.getCinemaById)
    router.patch("/user/order", middlewareUser.verifyToken, orderController.order)
    return app.use("/", router)
}
export default apiRouter