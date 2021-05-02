const express = require("express");

const app = express();

app.listen(4000, () => {
  console.log("server is running in 4000 ");
});

app.use((req: any, res: any, next: any) => {
  console.log("This is first default execution");
  next();
});

app.use((req: any, res: any, next: any) => {
  console.log("This is second default execution");
  res.send("<h1>hello world second</h1>");
});
