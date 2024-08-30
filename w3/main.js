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





function houseSize(size) {
    console.log("inside house function")
  switch (size) {
    case "Large House":
      carbonFootprintPoints += 10;
      break;
    case "Medium House":
      carbonFootprintPoints += 7;
      break;
    case "Small House":
      carbonFootprintPoints += 4;
      break;
    case "Apartment":
      carbonFootprintPoints += 2;
      break;
    default:
        console.log("Invalid House Size");
  }
  console.log(`Because is a ${size}, total carbonfootprint points is ${carbonFootprintPoints}`)
}

let carbonFootprintPoints = 0;
const numberInHousehold = 9;
const size = "Medium House"


// global scope
determinePoints(3);
//determinePoints(4);
houseSize(size)