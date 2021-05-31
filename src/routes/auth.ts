import { Router } from "express";
import { userRegister } from "../controller/auth";

const router = Router();

router.post("/register", userRegister);

export default router;
