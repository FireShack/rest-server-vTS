import express from "express";
import { handleLogin } from "../controllers/auth.controllers";

export const auth = express.Router();


auth.post("/login", handleLogin)



