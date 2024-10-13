import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

let table;

const renderTblHeading = function() {
  table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "Household",
    "HouseSize",
    "Footprint",
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
}

const onUpdate = function(index, data) {
  data.splice(index, 1); // selects the data from the array and removes it
  saveLS(data); // save the update to localStorage
  rendertTbl(data); //this refreshes the table

}

const renderTblBtn = function(index, data) {
  const tdActions = document.createElement("td"); //creates the cell under Actions
  const btnEdit = document.createElement("button"); //creates the button
  btnEdit.textContent = "Edit"; //fills in the button with the name
  const btnDel = document.createElement("button"); //creates the other button
  btnDel.textContent = "Del"; //fills in the button with the name
  tdActions.appendChild(btnEdit); //appends the button to the cell
  tdActions.appendChild(btnDel);
  btnDel.addEventListener("click", function (e) {
    onUpdate(index, data)
  });

  btnEdit.addEventListener("click", function (e) {
    const rowData = data[index]; // Get the row data from array
    FORM.firstname.value = rowData.fNameObj; // Populate the form fields
    FORM.lastname.value = rowData.lNameObj;
    FORM.housem.value = rowData.householdNumberObj;
    FORM.houses.value = rowData.houseSizeObj;
    onUpdate(index, data)
    
  });

  return tdActions;
}

const renderTblBody = function(data) {
  const tbody = document.createElement("tbody");
  //Loop thru the objects key pairs
  data.forEach(function (obj, index) {
    const tr = document.createElement("tr"); // Create new row
    for (const [key, value] of Object.entries(obj)) {
      if (
        key !== "lNameObj" &&
        key !== "houseHoldPTSObj" &&
        key !== "houseSizePTSObj"
      ) {
        //excluded keys
        const td = document.createElement("td"); // create cell
        td.textContent = value; // set the content in the cell
        tr.appendChild(td); // append to the row
      }
    }
    const tdActions = renderTblBtn(index, data);

    tr.appendChild(tdActions); //appends the button to the row
    tbody.appendChild(tr); // append the row to tbody
  });
  return tbody;
}

const rendertTbl = function(data) {
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
