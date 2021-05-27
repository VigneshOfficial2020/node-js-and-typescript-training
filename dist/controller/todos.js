"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todos_1 = __importDefault(require("../models/todos"));
const logger = require("../logger");
const createTodo = async (req, res, next) => {
    try {
        const text = req.body.text;
        const newTodo = new todos_1.default({ text });
        const data = newTodo.save();
        logger.info("Inside createTodo API data =" + data);
        res.status(201).json({
            message: "Successfully created",
            data: data,
            result: 1,
        });
    }
    catch (err) {
        logger.console.error("error in createTodo API", err);
        res.status(500).json({
            message: "Internal server error while creating.Please contact admin",
        });
    }
};
exports.createTodo = createTodo;
const getTodos = async (req, res, next) => {
    logger.info("Inside getTodos API");
    const data = await todos_1.default.find();
    res.status(200).json({ todos: data });
};
exports.getTodos = getTodos;
const updateTodo = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log("params", id);
        const text = req.body.text;
        const filter = { _id: id };
        const update = { text: text };
        let existingData = await todos_1.default.findOneAndUpdate(filter, update, {
            new: true,
        });
        res.status(200).json({
            message: "updated Successfully",
            result: existingData,
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Internal server error while updating.Please contact admin",
        });
    }
};
exports.updateTodo = updateTodo;
const deleteTodo = async (req, res, next) => {
    logger.info("Inside deleteTodo API");
    try {
        const id = req.params.id;
        console.log("params", id);
        const filter = { _id: id };
        let existingData = await todos_1.default.findOneAndDelete(filter);
        res.status(200).json({
            message: "updated Successfully",
            result: existingData,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error while deleting.Please contact admin",
        });
    }
};
exports.deleteTodo = deleteTodo;
