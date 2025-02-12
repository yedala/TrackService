import Expense from "../../../models/expenseModel.js";
import BaseExpenseCreator from "../expenseCreaterBaseClass.js";

class HotelExpenseCreater extends BaseExpenseCreator {
  createExpense(category, subCategory, data) {
    return new Expense({
      category: category,
      subCategory: subCategory,
      title: data?.title,
      amount: data?.amount,
      userId: data?.userId,
      flightDetails: null,

      hotelDetails: {
        checkInDate: data?.checkInDate,
        checkOutDate: data?.checkOutDate,
        hotelName: data?.hotelName,
        numberOfRooms: data?.rooms,
        costPerDay: data?.costPerDay,
      },
    });
  }
}

export default HotelExpenseCreater;
