import { rendertTbl } from "./render.js";
import { determineHouseSizePts, determinePoints } from "./cfModule.js";
import { FORM, OUTPUT, errorElement, cfpData } from "./global.js";
import { saveLS } from "./storage.js"


const start =  function(householdNumbers, houseSize) {
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

rendertTbl(cfpData);

FORM.addEventListener("submit", function (e) {
  console.log("Form submitted!");
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;

  let messages = []

  if (!firstName){
    messages.push("Name is required")
  }

  if (!lastName){
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
  FORM.reset();
  rendertTbl(cfpData);
});



const add2 = function(...a) {
  return 2 + a[3];
};

const result = add2();

//spread argument 

//IIFE
//const a = 3;

(function(){
  console.log("nside IIFE")
})();