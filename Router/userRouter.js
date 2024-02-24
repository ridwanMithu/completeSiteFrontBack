import express from "express";
import { registerUser } from "../Controller/userAuthController.js";


const backRouter=express.Router();

backRouter.get("/allUser",registerUser)


export default backRouter;