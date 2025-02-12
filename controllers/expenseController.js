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

const filterExpenses = asyncHandler(async (req, res) => {
  const query = req.query;
  const { userId } = req.body;
  let filter = { userId: userId };
  if (query?.startDate || query?.endDate) filter.createdAt = {};
  if (query?.startDate) filter.createdAt.$gte = new Date(query.startDate);
  if (query?.endDate)
    filter.createdAt.$lte = new Date(query.endDate).setHours(23, 59, 59, 999);
  if (query?.category) filter.category = query.category;
  try {
    const expenses = await Expense.find(filter).sort({ updatedAt: -1 });
    res.status(200).json({
      message: "Expenses fetched successfully",
      expenses: expenses,
      length: expenses.length,
    });
  } catch (e) {
    res.status(400);
    throw new Error("Error occured");
  }
});
export { createExpense, filterExpenses };
