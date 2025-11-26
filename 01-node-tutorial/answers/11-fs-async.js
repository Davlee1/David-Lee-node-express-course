console.log("-----------------------------------");
console.log("Question 7");
console.log("-----------------------------------");
console.log("");

const path = require("path");
const fs = require("fs");
const filePath = path.resolve(__dirname, "temporary", "fileb.txt");

console.log("at start");
//line 1
fs.writeFile(filePath, "This is line 1\n", (err, result) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    //line 2
    fs.writeFile(filePath, "This is line 2\n", { flag: "a" }, (err, result) => {
      console.log("at point 2");
      if (err) {
        console.log("This error happened: ", err);
      } else {
        //line 3
        fs.writeFile(
          filePath,
          "This is line 3\n",
          { flag: "a" },
          (err, result) => {
            console.log("at point 3");
            if (err) {
              console.log("This error happened: ", err);
            }
            console.log("at end");
          }
        );
      }
    });
    console.log("begining something else");
    return;
  }
});
