function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const initateEva = async (credentials) => {
  console.log("Initiating Eva...");
  await sleep(1000);
  console.log("...");
  await sleep(1000);
  console.log("Eva " + credentials.eva + " initiated!");
  await sleep(1000);
  console.log("Pilot " + credentials.name + " is ready!");
};

module.exports = initateEva;
