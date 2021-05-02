import { RequestHandler } from "express";
import Todo from "../models/todos";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  try {
    const text = req.body.text;
    const newTodo = new Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({
      message: "Successfully created",
      result: 1,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error while creating.Please contact admin",
    });
  }
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ todos: TODOS });
};

export const updateTodo: RequestHandler = (req, res, next) => {
  try {
    const id = req.params.id;
    console.log("params", id);
    const text = req.body.text;
    let existingData = TODOS.findIndex((obj) => obj.id === id);
    if (existingData == -1) {
      res.status(404).json({
        message: "Data Not Found",
      });
    }

    console.log(existingData);

    TODOS[existingData].text = text;

    res.status(200).json({
      message: "updated Successfully",
      result: 1,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error while updating.Please contact admin",
    });
  }
};
