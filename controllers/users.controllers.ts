import { Request, Response } from "express";

export const handleGetUsers = (req: Request, res: Response) => {
  try {
    res.status(200).json({ msg: "I'm alive from GET" });
  } catch (error) {
    res.status(400).json({ msg: "There was an error", error });
  }
};

export const handleGetUser = (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    res.status(200).json({ msg: "I'm alive from GET one", id });
  } catch (error) {
    res.status(400).json({ msg: "There was an error", error });
  }
};

export const handlePostUsers = (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    res.status(200).json({ msg: "User added", user: { name, email } });
  } catch (error) {
    res.status(400).json({ msg: "There was an error", error });
  }
};

export const handlePutUsers = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, mail } = req.body;
  try {
    res
      .status(200)
      .json({ msg: "User updated successfully", user: { id, name, mail } });
  } catch (error) {
    res.status(400).json({ msg: "There was an error", error });
  }
};

export const handleDeleteUsers = (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    res.status(200).json({ msg: "I'm alive from DELETE", id });
  } catch (error) {
    res.status(400).json({ msg: "There was an error", error });
  }
};
