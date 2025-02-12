import DefaultExpenseCreater from "./classes/defaultExpenseCreater.js";
import FLightExpenseCreater from "./classes/flightExpenseCreater.js";
import HotelExpenseCreater from "./classes/hotelExpenseCreater.js";
import VehicleExpenseCreater from "./classes/vehicleExpenseCreater.js";

class ExpenseFactory {
  static createExpense(category, subCategory, data) {
    if (category == "travel") {
      switch (subCategory) {
        case "flight":
          return new FLightExpenseCreater().createExpense(
            category,
            subCategory,
            data
          );
        case "hotel":
          return new HotelExpenseCreater().createExpense(
            category,
            subCategory,
            data
          );
        case "vehicle":
          return new VehicleExpenseCreater().createExpense(
            category,
            subCategory,
            data
          );
        default:
          return new DefaultExpenseCreater().createExpense(
            category,
            subCategory,
            data
          );
      }
    } else
      return new DefaultExpenseCreater().createExpense(
        category,
        subCategory,
        data
      );
  }
}

export default ExpenseFactory;
