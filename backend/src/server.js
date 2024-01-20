import express from "express";
import configViewEngine from "./configs/viewEngine";
import db from "./configs/db"
import apiRouter from "./routes/api"
var cors = require('cors')
require("dotenv").config()
const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3002
db.connect();
configViewEngine(app)
apiRouter(app)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})
