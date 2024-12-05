export class BudgetEvaluator {
  constructor(data) {
    this.data = data;
  }

  // Function to calculate total expenses
  calculateTotalExpenses() {
    const { fixedExpenses = 0, variableExpenses = 0 } = this.data; // Default to 0 if not provided
    return fixedExpenses + variableExpenses;
  }

  // Function to evaluate budget status
  evaluateBudget() {
    const totalExpenses = this.calculateTotalExpenses();
    const allIncome = this.data.totalIncome + this.data.additionalIncome;
    let outputMessage = ""; // Initialize output message

    // Check for validation
    if (isNaN(totalExpenses) || isNaN(this.data.totalIncome)) {
       this.data.outputMessage = "Invalid data. Please ensure all fields contain valid numbers.";
       return this.data;
     }

    if (totalExpenses > allIncome) {
      this.data.budgetStatus = "Over Budget";
      this.data.isWithinBudget = false;
      outputMessage = `You are over budget! Total Expenses: $${totalExpenses} exceed your Income of $${allIncome}.`;

      // Check expense thresholds
      if (
        this.data.variableExpenses > 0.5 * this.data.totalIncome &&
        this.data.fixedExpenses > 0.4 * this.data.totalIncome
      ) {
        outputMessage += ` Consider reducing your variable expenses ($${this.data.variableExpenses}), which are more than 50% of your income, and reviewing your fixed expenses ($${this.data.fixedExpenses}), as they are more than 40% of your income.`;
      }
    } else if (totalExpenses < allIncome) {
      this.data.budgetStatus = "Within Budget";
      this.data.isWithinBudget = true;
      outputMessage = `You are within your budget. Total Expenses: $${totalExpenses} out of $${allIncome}.`;

      // Suggestions
      if (
        totalExpenses < 0.3 * this.data.totalIncome ||
        this.data.variableExpenses < 0.2 * this.data.totalIncome
      ) {
        outputMessage += ` Great job! Your expenses are less than 30% of your income, or your variable expenses are below 20% of your income. Consider saving more!`;
      }

      // Edge case
      if (totalExpenses >= 0.9 * allIncome && totalExpenses < allIncome) {
        outputMessage += ` Warning! Your expenses are approaching your total income (${totalExpenses}/${allIncome}). Consider reviewing your budget.`;
      }
    } else {
      this.data.budgetStatus = "On Budget";
      this.data.isWithinBudget = true;
      outputMessage = `You are on budget. Total Expenses: $${totalExpenses} equal your Income of $${allIncome}.`;
    }
    outputMessage += ` Budget Status: ${this.data.budgetStatus}.`;

    this.data.outputMessage = outputMessage;

    return this.data; // Return the output message
  }
};
