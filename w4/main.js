const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePTS;
  if (size === "large") {
    houseSizePTS = 10;
  } else if (size === "medium") {
    houseSizePTS = 7;
  } else if (size === "small") {
    houseSizePTS = 4;
  } else if (size === "apt") {
    houseSizePTS = 2;
  }
  return houseSizePTS;
}

function determinePoints(numberInHousehold) {
  console.log("inside block scope");
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints;
}

function start(householdNumbers, houseSize) {
  const houseHoldPTS = determinePoints(householdNumbers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push([
    householdNumbers,
    houseSize,
    houseHoldPTS,
    houseSizePTS,
    total,
  ]);
}

// function displayOutput() {
//   for (arr of cfpData){
//     console.log(arr)
//     const output = document.getElementById("output");
//     const newP = document.createElement("p");
//     newP.textContent = `Carbon Footprint total is ${arr[4]}`;
//     output.appendChild(newP);
//   }

// }

function displayOutput() {
  let size;
  for (arr of cfpData) {
    console.log(arr);
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    if (arr[1] === "apt") {
      size = "an apartment";
    } else {
      size = arr[1];
    }
    newP.textContent = `The total number of Household members is ${arr[0]}, The House is ${size}, so total the total Carbon Footprint is ${arr[4]}`;
    output.appendChild(newP);
  }
}

start(5, "apt");
start(4, "large");
start(3, "medium");
start(1, "medium");
start(1, "apt");
start(1, "large");
start(10, "large");
start(10, "apt");

displayOutput();
