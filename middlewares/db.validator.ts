import { User } from "../models/user.model";

export const existsEmail = async (email: String) => {
  const emailExists = await User.findOne({
    where: {
      email,
    },
  });
  if (emailExists) {
    throw new Error(`${email} have another account, please login`);
  }

  return true;
};

export const existsUser = async (id: Buffer) => {
  const userExists = await User.findByPk(id);
  if (!userExists) {
    throw new Error(`User with ID ${id} does not exists`);
  }
  return true;
};
