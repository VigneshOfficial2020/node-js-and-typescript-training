import { Router } from "express";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controller/todos";
import { auth } from "../middleware/auth";

const router = Router();

router.post("/", [auth, createTodo]);
router.get("/", [auth, getTodos]);
router.patch("/:id", [auth, updateTodo]);
router.delete("/:id", [auth, deleteTodo]);

export default router;
