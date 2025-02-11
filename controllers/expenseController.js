import Expense from "../models/expenseModel.js";
import asyncHandler from "express-async-handler";

const createExpense = asyncHandler(async (req, res) => {
  let { userId, title, isGroupExpense, likedUserIds, category, amount } =
    req.body;

  const expense = await Expense.create({
    userId,
    title,
    isGroupExpense,
    likedUserIds,
    category,
    amount,
  });
  if (expense) {
    await expense.save();
    res.status(201).json({
      message: "Expense created successfully",
      expense: expense,
    });
  } else {
    res.status(400);
    throw new Error("Error occured");
  }
});

export { createExpense };
