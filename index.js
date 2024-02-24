// importing all necesary dependency
import express from "express";
import dotenv from "dotenv";
import cors from "cors";


// implementing all dependencies
dotenv.config();
const app = express()
const port = process.env.PORT1|| process.env. PORT2
app.use(cors());
app.use(express.json); 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})