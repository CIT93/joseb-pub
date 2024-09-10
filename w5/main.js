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

function displayOutObj(obj) {
  console.log(obj);
  const output = document.getElementById("output");
  const newH2 = document.createElement("h2");
  newH2.textContent = `Carbon Footprint total is ${obj.totalObj}`;
  const newH3 = document.createElement("H3");
  newH3.textContent = `Based on number in and size of home`
  const newP = document.createElement("p");
  newP.textContent = `This number is based on the number of people in the house of ${obj.householdNumberObj} (score: ${obj.houseHoldPTSObj}),`;
  newP.textContent += ` and a ${obj.houseSizeObj} size of home (score: ${obj.houseSizePTSObj}).`;
  output.appendChild(newH2);
  output.appendChild(newH3);
  output.appendChild(newP);
}

function start(householdNumbers, houseSize) {
  const houseHoldPTS = determinePoints(householdNumbers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;

  cfpData.push({
    householdNumberObj: householdNumbers,
    houseSizeObj: houseSize,
    houseHoldPTSObj: houseHoldPTS,
    houseSizePTSObj: houseSizePTS,
    totalObj: total
  });

}

function displayOutput() {
    for (obj of cfpData) {
      console.log(obj)
        const output = document.getElementById("output");
        const newH2 = document.createElement("h2");
        newH2.textContent = `Carbon Footprint ${obj.totalObj}`;
        // const newH3 = document.createElement("H3");
        // newH3.textContent = `Based on number in and size of home`
        // const newP = document.createElement("p");
        // newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}),`;
        // newP.textContent += ` and a ${arr[1]} size of home (score: ${arr[2]}).`;
        output.appendChild(newH2);
        // output.appendChild(newH3);
        // output.appendChild(newP);
    }
}
// function displayOutput() {
//   for (let i = 0; i < cfpData.length; i++) {
//     const output = document.getElementById("output");
//     const newH2 = document.createElement("h2");
//     newH2.textContent = `Carbon Footprint ${cfpData[i][4]}`;
//     const newH3 = document.createElement("H3");
//     newH3.textContent = `Based on number in and size of home`;
//     const newP = document.createElement("p");
//     newP.textContent = `This number is based on the number of people in the house of ${cfpData[i][0]} (score: ${cfpData[i][3]}),`;
//     newP.textContent += ` and a ${cfpData[i][1]} size of home (score: ${cfpData[i][2]}).`;
    //  output.appendChild(newH2);
//     output.appendChild(newH3);
//     output.appendChild(newP);
//   }
// }

start(5, "apt");
start(4, "large");
start(3, "medium");
start(1, "medium");
start(1, "apt");
start(1, "large");
start(10, "large");
start(10, "apt");


displayOutput();