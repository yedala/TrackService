import Expense from "../../../models/expenseModel.js";
import BaseExpenseCreator from "../expenseCreaterBaseClass.js";

class FLightExpenseCreater extends BaseExpenseCreator {
  createExpense(category, subCategory, data) {
    return new Expense({
      category: category,
      subCategory: subCategory,
      title: data?.title,
      amount: data?.amount,
      userId: data?.userId,
      flightDetails: {
        travelDate: data?.travelDate,
        from: data?.from,
        destination: data?.destination,
        airlineName: data?.airlineName,
        classTravelled: data?.classTravelled,
      },

      hotelDetails: null,
    });
  }
}

export default FLightExpenseCreater;
