import express from "express";
import { check } from "express-validator";
import {
  handleDeleteUsers,
  handleGetUser,
  handleGetUsers,
  handlePostUsers,
  handlePutUsers,
} from "../controllers/users.controllers";
import { validateFields } from "../middlewares/validate.fields";

export const users = express.Router();

users.get("/users", handleGetUsers);
users.get(
  "/users/:id",
  [check("id", "You must provide the ID").notEmpty(), validateFields],
  handleGetUser
);
users.post(
  "/users/add",
  [
    check("name", "You must a name").not().isEmpty(),
    check("email", "You must a valid email").isEmail(),
    check("password", "You must a valid password").not().isEmpty(),
    check("password", "You must a longer password").isLength({ min: 8 }),
    validateFields,
  ],
  handlePostUsers
);
users.put(
  "/users/modify/:id",
  [
    check("id").not().isEmpty(),
    check("name", "You must a name").not().isEmpty(),
    check("email", "You must a valid email").isEmail(),
    validateFields,
  ],
  handlePutUsers
);
users.delete(
  "/users/delete/:id",
  [check("id").not().isEmpty(), validateFields],
  handleDeleteUsers
);
