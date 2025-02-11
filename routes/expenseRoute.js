import { Router } from "express";
import { createExpense } from "../controllers/expenseController.js";
import authGaurd from "../middleware/authMiddleware.js";
// import authGaurd from "../middleware/authMiddleware";

const router = Router();

// router.post("/addExpense", authGaurd);
// router.route("/all").get(authGaurd, allUsers);
router.route("/addExpense").post(authGaurd, createExpense);
// router.route("/token").post(updateToken);
// router.route("/logout").post(authGaurd, logoutUser);

export default router;
