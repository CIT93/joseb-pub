import { rendertTbl } from "./render.js";
import { determineHouseSizePts, determinePoints } from "./cfModule.js";
import { FORM, OUTPUT, errorElement } from "./global.js";
import { saveLS, cfpData  } from "./storage.js"



function start(householdNumbers, houseSize) {
  const houseHoldPTS = determinePoints(householdNumbers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;

  cfpData.push({
    fNameObj: FORM.firstname.value,
    lNameObj: FORM.lastname.value,
    householdNumberObj: householdNumbers,
    houseSizeObj: houseSize,
    houseHoldPTSObj: houseHoldPTS,
    houseSizePTSObj: houseSizePTS,
    totalObj: total,
  });
}

FORM.addEventListener("submit", function (e) {
  console.log("Form submitted!");
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;

  let messages = []

  if (firstName === "" || firstName === null ){
    messages.push("Name is required")
  }

  if (lastName === "" || lastName === null){
    messages.push("Last Name is required")
  }

  if (messages.length > 0){
    console.log("Validation failed", messages);
    e.preventDefault();
    errorElement.innerText = messages.join(", ")
    errorElement.style.color = "red";
    return;
  }
  console.log("Validation passed! Proceeding...");
  start(houseMembers, houseSize);
  OUTPUT.innerHTML = "";
  saveLS(cfpData);
  rendertTbl(cfpData);
  FORM.reset();
});
