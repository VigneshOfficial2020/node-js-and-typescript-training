import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todos";
import { json } from "body-parser";

const app = express();

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
