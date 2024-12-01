import { getLS } from "./storage.js";
const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const TBL = document.getElementById("tab-data");
const errorElement = document.getElementById("error");
const cfpData = getLS();

export {FORM, TBL, OUTPUT, errorElement, cfpData};

// Without OUTPUT my code breaks