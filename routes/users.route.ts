import express from "express";
import { check } from "express-validator";
import {
  handleDeleteUsers,
  handleGetUser,
  handleGetUsers,
  handlePostUsers,
  handlePutUsers,
} from "../controllers/users.controllers";
import { existsEmail, existsUser } from "../middlewares/db.validator";
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
    check("name", "You must provide a name").not().isEmpty(),
    check("email", "You must provide a valid email").isEmail(),
    check("email").custom(existsEmail),
    check("password", "You must provide a valid password").not().isEmpty(),
    check("password", "You must provide a longer password").isLength({ min: 8 }),
    validateFields,
  ],
  handlePostUsers
);
users.put(
  "/users/modify/:id",
  [
    check("id").not().isEmpty(),
    check("id", "Invalid ID, too short").isLength({ min: 36 }),
    check("id").custom(existsUser),
    check("name", "You must provide a valid name").not().isEmpty(),
    check("email", "You must provide a valid email").isEmail(),
    validateFields,
  ],
  handlePutUsers
);
users.delete(
  "/users/delete/:id",
  [check("id").not().isEmpty(), validateFields],
  handleDeleteUsers
);
