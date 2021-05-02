import { Router } from "express";
import { createTodo } from "../controller/todos";
import { getTodos } from "../controller/todos";
import { updateTodo } from "../controller/todos";

const router = Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.patch("/:id", updateTodo);

export default router;
