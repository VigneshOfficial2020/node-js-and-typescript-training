"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.listen(4000, () => {
    console.log("server is running in 4000 ");
});
app.use((req, res, next) => {
    console.log("This is first default execution");
    next();
});
app.use((req, res, next) => {
    console.log("This is second default execution");
    // res.send("<h1>hello world second</h1>");
    res.status(200).json({
        name: "vicky",
        age: "26",
    });
});
