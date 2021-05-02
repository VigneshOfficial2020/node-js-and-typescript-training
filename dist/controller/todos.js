"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todos_1 = __importDefault(require("../models/todos"));
const logger = require("../logger");
const TODOS = [];
const createTodo = (req, res, next) => {
    try {
        logger.info("Inside createTodo API");
        const text = req.body.text;
        const newTodo = new todos_1.default(Math.random().toString(), text);
        TODOS.push(newTodo);
        res.status(201).json({
            message: "Successfully created",
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
const getTodos = (req, res, next) => {
    res.status(200).json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
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
    }
    catch (err) {
        res.status(500).json({
            message: "Internal server error while updating.Please contact admin",
        });
    }
};
exports.updateTodo = updateTodo;
