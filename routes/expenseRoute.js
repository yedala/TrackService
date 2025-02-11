import { Router } from "express";
import { createExpense } from "../controllers/expenseController.js";
import authGaurd from "../middleware/authMiddleware.js";

const router = Router();

router.route("/addExpense").post(authGaurd, createExpense);

export default router;
