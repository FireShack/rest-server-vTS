import { Sequelize } from "sequelize";

// const db_name = process.env.DB_NAME;
// const db_username = process.env.DB_USERNAME;
// const db_password = process.env.DB_PASSWORD;
// const db_host = process.env.DB_PASSWORD;

export const sequelizeDB = new Sequelize("fires-server-ts", "root", "", {
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
