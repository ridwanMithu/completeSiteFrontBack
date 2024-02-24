// importing all necesary dependency
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import backRouter from "./Router/userRouter.js";


// implementing all dependencies
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const port = process.env.PORT1 || process.env.PORT2;

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// api for all user. It will go to /api/v1 first there it will find the backRouter. when it will go to the backRouter file there it will see the route is /allUser. So, it will finally use  api/v1/allUser route.

app.use("/api/v1", backRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})