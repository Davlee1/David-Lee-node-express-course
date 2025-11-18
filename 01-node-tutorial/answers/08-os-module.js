console.log("-----------------------------------");
console.log("Question 4");
console.log("-----------------------------------");
console.log("");

const os = require("os");

//dumps the entire object
//console.log(os);

const user = os.userInfo();
console.log(user);
console.log("");

const arch = os.arch();
console.log(arch);
console.log("");

const cpu = os.cpus();
console.log(cpu);
