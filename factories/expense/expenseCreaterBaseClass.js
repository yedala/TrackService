class BaseExpenseCreator {
  createExpense(data) {
    throw new Error("createExpense() must be implemented by subclass");
  }
}

export default BaseExpenseCreator;
