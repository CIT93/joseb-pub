// How to Calculate Your Carbon Footprint
// M1

// 1. Count the members of your household.
const householdMemberCount = 4;
// 2. Consider the size of your home.
const homeSize = 4;
// 3. Evaluates your food choices.
const currentDiet = 8;
// 4. Examine your water consumption.
const waterConsumption = 1;
// 5. Determine how mane household purchases you make each year.
const purchasesEachYear = 4;
// 6. Consider how much waste you produce.
const wasteProducedWeekly = 20; 
// 7. Identify the amount of waste that you recycle.
const recycleAmount = 4;
// 8. Tally up your annual transportation scores.
const transportationUsage = 12;
// 9. Add up your points
const totalFootprint = householdMemberCount + homeSize + currentDiet + waterConsumption + purchasesEachYear + wasteProducedWeekly + recycleAmount + transportationUsage;
// 10. Write JS to update the rendered html (index.html) with total footprint
const myHeading = document.querySelector("h2");
myHeading.textContent = totalFootprint;