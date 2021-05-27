import { RequestHandler } from "express";
import Todo from "../models/todos";
const logger = require("../logger");

export const createTodo: RequestHandler = async (req, res, next) => {
  try {
    const text = req.body.text;
    const newTodo = new Todo({ text });
    const data = newTodo.save();
    logger.info("Inside createTodo API data =" + data);
    res.status(201).json({
      message: "Successfully created",
      data: data,
      result: 1,
    });
  } catch (err) {
    logger.console.error("error in createTodo API", err);
    res.status(500).json({
      message: "Internal server error while creating.Please contact admin",
    });
  }
};

export const getTodos: RequestHandler = async (req, res, next) => {
  logger.info("Inside getTodos API");
  const data = await Todo.find();
  res.status(200).json({ todos: data });
};

export const updateTodo: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log("params", id);
    const text = req.body.text;
    const filter = { _id: id };
    const update = { text: text };
    let existingData = await Todo.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.status(200).json({
      message: "updated Successfully",
      result: existingData,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error while updating.Please contact admin",
    });
  }
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
  logger.info("Inside deleteTodo API");

  try {
    const id = req.params.id;
    console.log("params", id);
    const filter = { _id: id };
    let existingData = await Todo.findOneAndDelete(filter);
    res.status(200).json({
      message: "updated Successfully",
      result: existingData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error while deleting.Please contact admin",
    });
  }
};
