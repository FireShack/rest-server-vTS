import { DataTypes } from "sequelize";
import { sequelizeDB } from "../db/db.config";

export const User = sequelizeDB.define("User", {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  img: {
    type: DataTypes.STRING,
  },
});
