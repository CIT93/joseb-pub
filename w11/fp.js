class FP {
    constructor(firstName, lastName, houseMembers, houseSize) {
        this.first = firstName
        this.last = lastName
        this.houseMembers = houseMembers
        this.houseSize = houseSize
        this.determineHouseSizePts();
        this.determinePoints();
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
    total() {
        this.total = this.houseHoldPoints + this.houseSizePTS;
    }
}
export { FP }