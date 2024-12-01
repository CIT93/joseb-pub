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
// got help from chatgpt for this snippet
document.addEventListener('DOMContentLoaded', () => {
  const owedMachinesSelect = document.getElementById('owedMachines');
  const dishwasherField = document.getElementById('dishwasherField');
  const washingMachineField = document.getElementById('washingMachineField');

  // Function to toggle visibility
  const toggleFields = () => {
    const selectedValue = owedMachinesSelect.value;

    // Hide all fields initially
    dishwasherField.style.display = 'none';
    washingMachineField.style.display = 'none';

    // Show relevant fields based on selection
    if (selectedValue === 'dishwasher') {
      dishwasherField.style.display = 'block';
    } else if (selectedValue === 'washingMachine') {
      washingMachineField.style.display = 'block';
    } else if (selectedValue === 'both') {
      dishwasherField.style.display = 'block';
      washingMachineField.style.display = 'block';
    }
    // If "none" is selected, all fields remain hidden
  };

  // Listen for changes on the select element
  owedMachinesSelect.addEventListener('change', toggleFields);

  // Initialize visibility on page load
  toggleFields();
});


FORM.addEventListener('submit', e => {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;

  if (firstName !== '' && lastName !== '') {
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
  } 
});