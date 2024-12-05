// Function to generate random budget scenarios
export const generateBudgetScenarios = (numScenarios) => {
    const scenarios = [];
    for (let i = 0; i < numScenarios; i++) {
      const totalIncome = Math.floor(Math.random() * 1000) + 6000; // Random income between 1000 and 6000
      const additionalIncome = Math.floor(Math.random() * 500); // Random additional income between 0 and 500
      const fixedExpenses = Math.floor(Math.random() * (totalIncome * 0.5)); // Random fixed expenses up to 50% of total income
      const variableExpenses = Math.floor(Math.random() * (totalIncome * 0.9)); // Random variable expenses up to 90% of total income
  
      scenarios.push({
        totalIncome,
        additionalIncome,
        fixedExpenses,
        variableExpenses,
        budgetStatus: "",
        isWithinBudget: false,
      });
    }
    return scenarios;
  };
  