import express from "express";
import {
  handleDeleteUsers,
  handleGetUser,
  handleGetUsers,
  handlePostUsers,
  handlePutUsers,
} from "../controllers/users.controllers";

export const users = express.Router();

users.get("/users", handleGetUsers);
users.get("/users/:id", handleGetUser);
users.post("/users/add", handlePostUsers);
users.put("/users/modify/:id", handlePutUsers);
users.delete("/users/delete/:id", handleDeleteUsers);
