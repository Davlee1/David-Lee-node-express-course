const os = require('os');
const path = require("path");
const { writeFile, readFile } = require("fs").promises;
const filePath = path.resolve(__dirname, "temp.txt");
const lineBreak = os.EOL;

const writer = async () => {
  try {
    await writeFile(filePath, `Hello 1`+ lineBreak);
    await writeFile(filePath, `Hello 2`+ lineBreak, { flag: "a" });
    await writeFile(filePath, `Hello 3`+ lineBreak, { flag: "a" });
  } catch (error) {
    console.log("An error occurred: ", error);
  }
};

const reader = async () => {
  try {
    const result = await readFile(filePath, "utf8");
    console.log(result);
  } catch (err) {
    console.log("An error occurred: ", err);
  }
};

const readWrite = async () => {
  try {
    await writer();
    await reader();
  } catch (err) {
    console.log("An error occurred: ", err);
  }
};

readWrite();