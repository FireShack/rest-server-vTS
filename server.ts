import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { users } from "./routes/users.route";

// Basic configs
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(json());
app.use("/api", users);

// Run server
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
