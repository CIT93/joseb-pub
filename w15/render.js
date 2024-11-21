import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

let table;

const renderTblHeading = () => {
  table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "Household",
    "HouseSize",
    "Food Choices",
    "Footprint",
    "Actions",
  ];
  headingTextArr.forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  return table;
}

const onUpdate = (index, data) => {
  data.splice(index, 1); // selects the data from the array and removes it
  saveLS(data); // save the update to localStorage
  rendertTbl(data); //this refreshes the table

}

const renderTblBtn = (index, data) => {
  const tdActions = document.createElement("td"); //creates the cell under Actions
  const btnEdit = document.createElement("button"); //creates the button
  btnEdit.textContent = "Edit"; //fills in the button with the name
  const btnDel = document.createElement("button"); //creates the other button
  btnDel.textContent = "Del"; //fills in the button with the name
  tdActions.appendChild(btnEdit); //appends the button to the cell
  tdActions.appendChild(btnDel);
  btnDel.addEventListener("click", e => {
    onUpdate(index, data)
  });

  btnEdit.addEventListener("click", e => {
    const rowData = data[index]; // Get the row data from array
    FORM.firstname.value = rowData.first; // Populate the form fields
    FORM.lastname.value = rowData.last;
    FORM.housem.value = rowData.houseMembers;
    FORM.houses.value = rowData.houseSize;
    FORM.food.value = rowData.food;
    onUpdate(index, data)

  });

  return tdActions;
}

const renderTblBody = data => {
  const tbody = document.createElement("tbody");

  //Loop thru the objects key pairs
  data.forEach((obj, index) => {
    const tr = document.createElement("tr"); // Create new row
    const keys = ["first", "houseMembers", "houseSize", "food", "total"]

    keys.forEach(key => {
      const td = document.createElement("td"); // create cell
      td.textContent = obj[key]; // set the content in the cell
      tr.appendChild(td); // append to the row
    })
    const tdActions = renderTblBtn(index, data);
    tr.appendChild(tdActions); //appends the button to the row
    tbody.appendChild(tr); // append the row to tbody
  });
  
  // Calculate the average total
  const average = data.reduce((sum, item) => sum + (item.total || 0), 0) / data.length;

  // Create a row for the average
  const trAverage = document.createElement("tr");
  const tdAverageLabel = document.createElement("td");
  tdAverageLabel.colSpan = 4; // Span across the first four columns
  tdAverageLabel.textContent = "Average Footprint";
  tdAverageLabel.style.fontWeight = "bold";

  const tdAverageValue = document.createElement("td");
  tdAverageValue.textContent = average.toFixed(2); // Display the average with two decimal places
  tdAverageValue.style.fontWeight = "bold";

  trAverage.appendChild(tdAverageLabel);
  trAverage.appendChild(tdAverageValue);

  const tdEmptyActions = document.createElement("td"); // Empty cell for the "Actions" column
  trAverage.appendChild(tdEmptyActions);

  tbody.appendChild(trAverage); // Append the average row to tbody


  return tbody;
}

const rendertTbl = data => {
  TBL.innerHTML = ""; // Clear previous table content
  if (data.length === 0) {
    //check if the array is empty, if true exits the function
    return;
  }
  const table = renderTblHeading();
  const tbody = renderTblBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
}

export { rendertTbl };
