const os = require("os");
const lineBreak = os.EOL;
const { writeFile, readFile } = require("fs").promises;
const path = require("path");
const filePath = path.resolve(__dirname, "temp.txt");

const writer = async () => {
  console.log("1");
  writeFile(filePath, `Hello 1a` + lineBreak)
    .then(() => {
      console.log("2");
      return writeFile(filePath, `Hello 2a` + lineBreak, { flag: "a" });
    })
    .then(() => {
      console.log("3");
      return writeFile(filePath, `Hello 3a` + lineBreak, { flag: "a" });
    })

    .catch((error) => {
      console.log("An error occurred: ", error);
    });
};

writer();
