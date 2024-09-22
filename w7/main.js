import { rendertTbl} from "./render.js";
import { determineHouseSizePts, determinePoints } from "./cfModule.js";
const FORM = document.getElementById("form");
const cfpData = [];
const OUTPUT = document.getElementById("output");

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
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(houseMembers, houseSize);
  OUTPUT.innerHTML = "";
  rendertTbl(cfpData);
  FORM.reset();
});

// the exposure to modules slowly brings back memories from other programing languages
// having import functions from another file i seen it many times and now that we
// use it here Im sure it will create a clean code.