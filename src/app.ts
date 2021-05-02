import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todos";
const app = express();

app.listen(4000, () => {
  console.log("server is running in 4000 ");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("This is first default execution");
  next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("This is second default execution");
  // res.send("<h1>hello world second</h1>");
  res.status(200).json({
    name: "vicky",
    age: "26",
  });
});
