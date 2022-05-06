import { Sequelize } from "sequelize";

const db_name = process.env.DB_NAME as string;
const db_username = process.env.DB_USERNAME as string;
const db_password = process.env.DB_PASSWORD as string;
const db_host = process.env.DB_PASSWORD as string;

export const sequelizeDB = new Sequelize(db_name, "root", "", {
  host: "localhost",
  dialect: "mariadb",
});

export const initDB = async () => {
  try {
    await sequelizeDB.authenticate();
    console.log("All ok");
  } catch (error) {
    console.log("There was an error", error);
  }
};
