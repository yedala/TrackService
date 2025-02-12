import ExpenseFactory from "../factories/expense/expenseFactory.js";
import Expense from "../models/expenseModel.js";
import asyncHandler from "express-async-handler";

const createExpense = asyncHandler(async (req, res) => {
  let { category, subCategory, ...expenseData } = req.body;
  const expense = ExpenseFactory.createExpense(
    category,
    subCategory,
    expenseData
  );
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
