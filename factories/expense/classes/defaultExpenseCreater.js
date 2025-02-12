import Expense from "../../../models/expenseModel.js";
import BaseExpenseCreator from "../expenseCreaterBaseClass.js";

class DefaultExpenseCreater extends BaseExpenseCreator {
  createExpense(category, subCategory, data) {
    return new Expense({
      category: category,
      subCategory: subCategory,
      title: data?.title,
      amount: data?.amount,
      userId: data?.userId,
      flightDetails: null,
      hotelDetails: null,
    });
  }
}

export default DefaultExpenseCreater;
