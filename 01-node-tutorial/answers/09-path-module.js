console.log("-----------------------------------");
console.log("Question 5");
console.log("-----------------------------------");
console.log("");

const path = require("path");
const fs = require("fs");

//using windows
const filePath = path.join("./content/", "subfolder2", "test2.txt");
console.log(filePath);

const absolute = path.resolve(__dirname, "content", "subfolder2", "test2.txt");
//console.log(absolute)

const readTxt = fs.readFileSync(absolute, "utf8");

console.log(readTxt);
