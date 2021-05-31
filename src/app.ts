import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todos";
import authRoutes from "./routes/auth";
import { json } from "body-parser";
const path = require("path");
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://localhost/Gembrill")
  .then(() => {
    console.log("mongodb is connected to Gembrill");
  })
  .catch(() => {
    console.log("connection failed");
  });

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

app.use(json());

app.listen(4000, () => {
  console.log("server is running in 4000 ");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("This is first default execution");
  next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("This is second default execution");
  next();
});

app.use("/todos", todoRoutes);

app.use("/auth/", authRoutes);
