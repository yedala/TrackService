import { Router } from "express";
import {
  createExpense,
  filterExpenses,
  getExpense,
} from "../controllers/expenseController.js";
import authGaurd from "../middleware/authMiddleware.js";

const router = Router();

router.route("/addExpense").post(authGaurd, createExpense);
router.route("/").get(authGaurd, filterExpenses);
router.route("/total").get(authGaurd, getExpense);

export default router;
