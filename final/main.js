import { rendertTbl } from './render.js'; // Import the table rendering function
import { saveLS, getLS } from './storage.js';
import { BudgetEvaluator } from './BudgetEvaluator.js';

const info = document.getElementById("info");
let dataArray = getLS() || [];


//Got this snip from chatGPT to load todays date
document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("date");
  const today = new Date().toISOString().split('T')[0];
  dateInput.value = today;

  rendertTbl(dataArray);
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleDarkMode = document.getElementById("toggleDarkMode");
  const body = document.body;

  toggleDarkMode.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
          toggleDarkMode.textContent = "Disable Dark Mode";
      } else {
          toggleDarkMode.textContent = "Enable Dark Mode";
      }
  });
});


const getFormValues = () => {
  const formElements = [
    { id: 'date', key: 'date', type: 'text' },
    { id: 'firstName', key: 'firstName', type: 'text' },
    { id: 'lastName', key: 'lastName', type: 'text' },
    { id: 'income', key: 'totalIncome', type: 'number' },
    { id: 'moreincome', key: 'additionalIncome', type: 'number' },
    { id: 'fixedExpense', key: 'fixedExpenses', type: 'number' },
    { id: 'variableExpense', key: 'variableExpenses', type: 'number' }
  ];

  //console.log("Form Data:", formData);
  // Loop through each form element and retrieve the value
  const formData = {};
  formElements.forEach(({ id, key, type }) => {
    const value = document.getElementById(id).value;
    formData[key] = type === 'number' ? parseFloat(value) || 0 : value;
  });

  console.log("Collected Form Data:", formData); // Debugging output
  return formData;
};

info.addEventListener("submit", e => {
  e.preventDefault();
  console.log("Submitted");

  const formData = getFormValues();

  const budgetData = {
    ...formData,
    budgetStatus: "",
    isWithinBudget: false,
    outputMessage: "", // Initialize empty message
  };


  console.log("Budget Data Before Evaluation:", budgetData);

  //new instance of BudgetEvaluator class
  const evaluator = new BudgetEvaluator(budgetData);

  //update budget data
  const result = evaluator.evaluateBudget();

  //add the result to the array
  dataArray.push(result);
  saveLS(dataArray);

  rendertTbl(dataArray);
  info.reset();
});
