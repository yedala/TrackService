import { Router } from "express";
import {
  createExpense,
  getAllExpenses,
} from "../controllers/expenseController.js";
import authGaurd from "../middleware/authMiddleware.js";

const router = Router();

router.route("/addExpense").post(authGaurd, createExpense);
router.route("/").get(authGaurd, getAllExpenses);

export default router;
