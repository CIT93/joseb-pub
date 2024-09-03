function determinePoints(numberInHousehold) {
  console.log("inside the function");
  if (numberInHousehold === 1) {
    carbonFootprintPoints = carbonFootprintPoints + 14;
  } else if (numberInHousehold === 2) {
    carbonFootprintPoints = carbonFootprintPoints + 12;
  } else if (numberInHousehold === 3) {
    carbonFootprintPoints = carbonFootprintPoints + 10;
  } else if (numberInHousehold === 4) {
    carbonFootprintPoints = carbonFootprintPoints + 8;
  } else if (numberInHousehold === 5) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
  } else if (numberInHousehold === 6) {
    carbonFootprintPoints = carbonFootprintPoints + 4;
  } else if (numberInHousehold > 6) {
    carbonFootprintPoints = carbonFootprintPoints + 2;
  }
  console.log(
    `The number of house members is ${numberInHousehold} therefore the total points is ${carbonFootprintPoints}`
  );
}

function determineHouseSizePts(size) {
  if (size === "large") {
    carbonFootprintPoints = carbonFootprintPoints + 10;
  } else if (size === "medium") {
    carbonFootprintPoints = carbonFootprintPoints + 7;
  } else if (size === "small") {
    carbonFootprintPoints = carbonFootprintPoints + 4;
  } else if (size === "apt") {
    carbonFootprintPoints = carbonFootprintPoints + 2;
  }
  console.log(`Because is a ${size}, total carbonfootprint points is ${carbonFootprintPoints}`)
}

let carbonFootprintPoints = 0;

// global scope
determinePoints(5);
//determinePoints(4);
determineHouseSizePts("apt");
