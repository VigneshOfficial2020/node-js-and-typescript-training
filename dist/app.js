"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const body_parser_1 = require("body-parser");
const app = express_1.default();
app.use(body_parser_1.json());
app.listen(4000, () => {
    console.log("server is running in 4000 ");
});
app.use((req, res, next) => {
    console.log("This is first default execution");
    next();
});
app.use((req, res, next) => {
    console.log("This is second default execution");
    next();
});
app.use("/todos", todos_1.default);
