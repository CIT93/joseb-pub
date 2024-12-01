import { rendertTbl } from "./render.js";
import { determineHouseSizePts, determinePoints } from "./cfModule.js";
import { FORM, OUTPUT, errorElement, cfpData } from "./global.js";
import { saveLS } from "./storage.js"
import { FP } from "./fp.js"

const start = (householdNumbers, houseSize) => {
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
    owedMachines: FORM.owedMachines,
    dwRuns: FORM.dwRuns,
    wmRuns: FORM.wmRuns,


    totalObj: total,
  });
}

rendertTbl(cfpData);


FORM.addEventListener('submit', e => {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;

  if (firstName !== '' && lastName !== '') {
    //SUBMIT.textContext = '';
    const fpObj = new FP(
      firstName,
      lastName,
      parseInt(e.target.housem.value),
      e.target.houses.value,
      e.target.food.value,
      e.target.foodSource.value,
      e.target.owedMachines.value,
      parseInt(e.target.dwRuns.value),
      parseInt(e.target.wmRuns.value)
    );
    cfpData.push(fpObj)
    saveLS(cfpData);
    rendertTbl(cfpData);
    FORM.reset(); 
  } else {
    //SUBMIT.textContext = "Form requires first name and last name";
  }
});

// FORM.addEventListener("submit", e => {
//   console.log("Form submitted!");
//   const firstName = FORM.firstname.value;
//   const lastName = FORM.lastname.value;
//   const houseMembers = parseInt(FORM.housem.value);
//   const houseSize = FORM.houses.value;
//   const food = FORM.food.value;


//   let messages = []

//   if (!firstName) {
//     messages.push("Name is required")
//   }

//   if (!lastName) {
//     messages.push("Last Name is required")
//   }

//   if (messages.length > 0) {
//     console.log("Validation failed", messages);
//     e.preventDefault();
//     errorElement.innerText = messages.join(", ")
//     errorElement.style.color = "red";
//     return;
//   }
//   console.log("Validation passed! Proceeding...");
//   const jose = new FP(firstName, lastName, houseMembers, houseSize, food);
//   OUTPUT.innerHTML = "";
//   cfpData.push(jose)
//   saveLS(cfpData);
//   rendertTbl(cfpData);
// });