class FP {
    constructor(firstName, lastName, houseMembers, houseSize, food, foodSource, owedMachines, dwRuns = 0, wmRuns = 0, householdPurchases) {
        this.first = firstName
        this.last = lastName
        this.houseMembers = houseMembers
        this.houseSize = houseSize
        this.food = food
        this.foodSource = foodSource;
        this.owedMachines = owedMachines;
        this.dwRuns = dwRuns;
        this.wmRuns = wmRuns;
        this.householdPurchases = householdPurchases;
        this.determineHouseSizePts();
        this.determinePoints();
        this.foodChoice();
        this.calFoodSourcePoints();
        this.calWaterConsumption();
        this.householdPurchasesCal()
        this.total();
    }

    //copied the function from cfModule
    determineHouseSizePts() {
        if (this.houseSize === "large") {
            this.houseSizePTS = 10;
        } else if (this.houseSize === "medium") {
            this.houseSizePTS = 7;
        } else if (this.houseSize === "small") {
            this.houseSizePTS = 4;
        } else if (this.houseSize === "apt") {
            this.houseSizePTS = 2;
        }
    }

    //was close, i was missing the "this"
    determinePoints() {
        if (this.houseMembers === 1) {
            this.houseHoldPoints = 14;
        } else if (this.houseMembers === 2) {
            this.houseHoldPoints = 12;
        } else if (this.houseMembers === 3) {
            this.houseHoldPoints = 10;
        } else if (this.houseMembers === 4) {
            this.houseHoldPoints = 8;
        } else if (this.houseMembers === 5) {
            this.houseHoldPoints = 6;
        } else if (this.houseMembers === 6) {
            this.houseHoldPoints = 4;
        } else if (this.houseMembers > 6) {
            this.houseHoldPoints = 2;
        }
    }
    //Consider food choices
    foodChoice() {
        if (this.food === "domestic") {
            this.foodPTS = 10;
        } else if (this.food === "fewdomestic") {
            this.foodPTS = 8;
        } else if (this.food === "vegetarian") {
            this.foodPTS = 4;
        } else if (this.food === "vegan") {
            this.foodPTS = 2;
        } else if (this.food === "prepackedjunk") {
            this.foodPTS = 12;
        } else if (this.food === "prepackedhealthy") {
            this.foodPTS = 6;
        } else if (this.food === "local") {
            this.foodPTS = 2;
        }
    }
    // calculate foodsource points
    calFoodSourcePoints() {
        if (this.foodSource === "packed") {
            this.foodSourcePoints = 12;
        } else if (this.foodSource === "balance") {
            this.foodSourcePoints = 6;
        } else if (this.foodSource === "local") {
            this.foodSourcePoints = 2;
        }
    }
    //calculate water consumption
    calWaterConsumption() {

        console.log("Owned Machines:", this.owedMachines);
        console.log("Dishwasher Runs:", this.dwRuns);
        console.log("Washing Machine Runs:", this.wmRuns);

        const calculateRunPoints = (runs) => {
            if (runs > 9) return 3;
            if (runs >= 4) return 2;
            if (runs >= 1) return 1;
            return 0;
        };
        this.waterConsumptionPoints = 0;

        if (this.owedMachines === "none") {
            return;
        }

        if (this.owedMachines === "dishwasher") {
            this.waterConsumptionPoints += calculateRunPoints(this.dwRuns);
        } else if (this.owedMachines === "washingMachine") {
            this.waterConsumptionPoints += calculateRunPoints(this.wmRuns);
        } else if (this.owedMachines === "both") {
            this.waterConsumptionPoints += calculateRunPoints(this.dwRuns);
            this.waterConsumptionPoints += calculateRunPoints(this.wmRuns);
        }
    }
    householdPurchasesCal() {
        
        if (this.householdPurchases === "10") {
            this.householdPurchPoints = 10;
        } else if (this.householdPurchases === "8") {
            this.householdPurchPoints = 8;
        } else if (this.householdPurchases === "6") {
            this.householdPurchPoints = 6;
        } else if (this.householdPurchases === "4") {
            this.householdPurchPoints = 4;
        } else if (this.householdPurchases === "2") {
            this.householdPurchPoints = 2;
        }
        console.log("HH PurchPoints:", this.householdPurchPoints);
    } 

    total() {
        this.total = this.houseHoldPoints + this.houseSizePTS + this.foodPTS + this.foodSourcePoints + this.waterConsumptionPoints + this.householdPurchPoints;
    }
}
export { FP }