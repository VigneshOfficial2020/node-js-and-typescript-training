import { RequestHandler } from "express";
import Auth from "../models/auth";
const bcrypt = require("bcryptjs");

export const userRegister: RequestHandler = (req: any, res, next) => {
  try {
    bcrypt.hash(req.body.password, 10).then((hash: any) => {
      let userCreate = new Auth({
        email: req.body.email,
        password: hash,
      });
      userCreate.save((err: any) => {
        if (err) {
          res.send(err);
        } else {
          res.status(201).json({ message: "success" });
        }
      });
    });
  } catch (err) {
    res.status(400).json({ message: "error", error: err });
  }
};
