

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

  export {determineHouseSizePts, determinePoints};