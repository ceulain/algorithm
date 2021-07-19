import process from "process";
import binarySearch from "./binary_search.js";

const array = process.argv.slice(2, -1).map(Number);
const target = Number(process.argv.slice(-1)[0]);

console.log(binarySearch(array, target));
