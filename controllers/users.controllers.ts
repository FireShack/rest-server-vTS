import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { User } from "../models/user.model";

export const handleGetUsers = async (req: Request, res: Response) => {
  try {
    const [amountUsers, allUsers] = await Promise.all([
      User.count({
        where: {
          state: true,
        },
      }),
      User.findAll({
        where: {
          state: true,
        },
      }),
    ]);
    res.status(200).json({
      msg: "Here are the users",
      "Active users": amountUsers,
      users: allUsers,
    });
  } catch (error) {
    res.status(400).json({ msg: "There was an error", error });
  }
};

export const handleGetUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const oneUser = await User.findByPk(id);
    if (!oneUser) {
      return res.status(400).json({ msg: `There is no user with id ${id}` });
    }
    res
      .status(200)
      .json({ msg: "The user you are searching for", user: oneUser });
  } catch (error) {
    res.status(400).json({ msg: "There was an error", error });
  }
};

export const handlePostUsers = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const id = uuidv4();
  try {
    const userToAdd = User.build({ id, name, email, password });
    await userToAdd.save();
    res.status(200).json({ msg: "User added", user: { name, email } });
  } catch (error) {
    res.status(400).json({ msg: "There was an error", error });
  }
};

export const handlePutUsers = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const userToUpd = await User.findByPk(id);

    userToUpd?.update({
      name,
      email,
    });
    res
      .status(200)
      .json({ msg: "User updated successfully", user: { id, name, email } });
  } catch (error) {
    res.status(400).json({ msg: "There was an error", error });
  }
};

export const handleDeleteUsers = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userToDelete = await User.findByPk(id);

    if (!userToDelete) {
      return res
        .status(400)
        .json({ msg: `The user with ID ${id} does not exists` });
    }

    userToDelete.update({
      state: false,
    });

    res.status(200).json({ msg: "User deleted", id });
  } catch (error) {
    res.status(400).json({ msg: "There was an error", error });
  }
};
