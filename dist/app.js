"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const auth_1 = __importDefault(require("./routes/auth"));
const body_parser_1 = require("body-parser");
const path = require("path");
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
mongoose_1.default
    .connect("mongodb://localhost/Gembrill")
    .then(() => {
    console.log("mongodb is connected to Gembrill");
})
    .catch(() => {
    console.log("connection failed");
});
const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express_1.default.static(publicDirectoryPath));
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
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELTE,PATCH");
    next();
});
app.use("/todos", todos_1.default);
app.use("/auth/", auth_1.default);
