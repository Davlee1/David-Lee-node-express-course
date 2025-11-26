console.log("-----------------------------------");
console.log("Question 3");
console.log("-----------------------------------");
const names = require("./04-names.js");
const initialize = require("./05-utils.js");
const altFlavor = require("./06-alternative-flavor.js");
const grenade = require("./07-mind-grenade.js");
console.log("");

console.log("Nerv HQ current status: " + altFlavor.stat);
console.log("Recomended action: " + altFlavor.act);
console.log("");
initialize(names.pilot00);
initialize(names.pilot01);
initialize(names.pilot02);
