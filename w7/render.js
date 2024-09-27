const TBL = document.getElementById("tab-data");
let table;

function renderTblHeading() {
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
  const tbody = document.createElement("tbody");
  table.appendChild(tbody); // Create tbody here as well

  TBL.appendChild(table); // Append the table to TBL only once
}

function rendertTbl(data) {
  if (!table) renderTblHeading(); // to ensure table is created once

  const tbody = table.getElementsByTagName("tbody")[0]; // Get the existing tbody
  tbody.innerHTML = ""; //clear existing rows so it doesnt duplicate data
  
  data.forEach((dataObj) => {
    const tr = document.createElement("tr");

    // Destructure relevant fields, excluding last name, house member points, and house size points. learned something new
    const { fNameObj, householdNumberObj, houseSizeObj, totalObj } = dataObj;

    // Array of the values to render
    const trTextArr = [fNameObj, householdNumberObj, houseSizeObj, totalObj];

    // Loop through the array and create table cells
    trTextArr.forEach(function (text) {
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
    });

  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";

  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  tr.appendChild(td);
  tbody.appendChild(tr);
  
});
}

export { rendertTbl };
