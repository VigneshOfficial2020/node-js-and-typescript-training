"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegister = void 0;
const auth_1 = __importDefault(require("../models/auth"));
const bcrypt = require("bcryptjs");
const userRegister = (req, res, next) => {
    try {
        bcrypt.hash(req.body.password, 10).then((hash) => {
            let userCreate = new auth_1.default({
                email: req.body.email,
                password: hash,
            });
            userCreate.save((err) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.status(201).json({ message: "success" });
                }
            });
        });
    }
    catch (err) {
        res.status(400).json({ message: "error", error: err });
    }
};
exports.userRegister = userRegister;
