console.log("-----------------------------------");
console.log("Question 6");
console.log("-----------------------------------");
console.log("");

const path = require("path");
const fs = require("fs");
const filePath = path.resolve(__dirname, "temporary", "fileA.txt");

fs.writeFileSync(filePath, "hello. This is line 1." + '\n');
console.log("line added");
fs.writeFileSync(filePath, "hello. This is line 2" + '\n', { flag: 'a' });
console.log("line added");
fs.writeFileSync(filePath, "hello. This is line 3" + '\n', { flag: 'a' });
console.log("line added");

const lines = fs.readFileSync(filePath, "utf8");

console.log(lines);

