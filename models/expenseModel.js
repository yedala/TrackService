import { Schema, model } from "mongoose";

const expenseModal = Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    userId: {
      type: String,
      trim: true,
      required: true,
    },
    isGroupExpense: {
      type: Boolean,
      default: false,
    },
    likedUserIds: [
      {
        type: String,
      },
    ],
    category: {
      type: String,
      required: true,
      default: "Others",
    },
    amount: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Expense = model("Expense", expenseModal);
export default Expense;
