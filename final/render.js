import { saveLS } from "./storage.js";
let table;

// Function to create the table heading
const renderTblHeading = function() {
  table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Date",
    "First Name",
    // "Budget Status",
    "Advice",
    "Actions",
  ];
  
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  
  thead.appendChild(tr);
  table.appendChild(thead);

  return table;
};

const onUpdate = function(index, data) {
  data.splice(index, 1); // Remove the entry from the data array
  saveLS(data); // This will save to local storage
  rendertTbl(data); // Refresh the table display
};

// Function to create action buttons
const renderTblBtn = function(index, data) {
  const tdActions = document.createElement("td"); // Create the Actions cell
  const btnEdit = document.createElement("button"); // Create the Edit button
  btnEdit.textContent = "Edit"; // Set button text
  const btnDel = document.createElement("button"); // Create the Delete button
  btnDel.textContent = "Del"; // Set button text
  
  tdActions.appendChild(btnEdit); // Append Edit button to Actions cell
  tdActions.appendChild(btnDel); // Append Delete button to Actions cell

  // Event listener for Delete button
  btnDel.addEventListener("click", function () {
    onUpdate(index, data); // Call update function to delete entry


  });

  // Event listener for Edit button
btnEdit.addEventListener("click", function () {
  const rowData = data[index];

  // Ensure values are valid before populating form
  info.firstName.value = rowData.firstName || '';  // Default to empty string if undefined
  info.lastName.value = rowData.lastName || '';    // Default to empty string if undefined
  info.date.value = rowData.date || '';            // Default to empty string if undefined
  info.income.value = rowData.totalIncome || 0;    // Default to 0 if undefined
  info.moreincome.value = rowData.additionalIncome || 0;  // Default to 0 if undefined
  info.fixedExpense.value = rowData.fixedExpenses || 0;   // Default to 0 if undefined
  info.variableExpense.value = rowData.variableExpenses || 0;  // Default to 0 if undefined

  // Trigger the update after the form values are set
  onUpdate(index, data);  // This will remove the line from the display
});

  return tdActions;
};


// Function to create the table body
const renderTblBody = function(data) {
  const tbody = document.createElement("tbody");
  
  data.forEach((entry, index) => {
    const row = document.createElement("tr");

    const dateCell = document.createElement("td");
    dateCell.textContent = entry.date;
    row.appendChild(dateCell);

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = entry.firstName;
    row.appendChild(firstNameCell);

    // const budgetStatusCell = document.createElement("td");
    // budgetStatusCell.textContent = entry.budgetStatus;
    // row.appendChild(budgetStatusCell);
    
    const statusCell = document.createElement("td");
    statusCell.textContent = entry.outputMessage;
    row.appendChild(statusCell);

    const actionCell = renderTblBtn(index, data); // Create action buttons
    row.appendChild(actionCell); // Append the button cell to the row

    tbody.appendChild(row);
  });

  return tbody;
};

// Function to render the table
const rendertTbl = function(data) {
  const TBL = document.getElementById("dataTable");
  TBL.innerHTML = ""; // Clear previous table content
  
  if (data.length === 0) {
    return; // Exit if no data to display
  }
  
  const table = renderTblHeading(); // Create table heading
  const tbody = renderTblBody(data); // Create table body with data
  table.appendChild(tbody); // Append tbody to table
  TBL.appendChild(table); // Append table to the container
};

export { rendertTbl };
