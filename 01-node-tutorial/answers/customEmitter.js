const EventEmitter = require("events");
const emitter = new EventEmitter();

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

emitter.on("greetings", (msg) => console.log(msg));
const timer = async () => {
   await sleep(1000);
    emitter.emit("greetings", "hello there");
    await sleep(1000);
    emitter.emit("greetings", "General Kenobi");
};

timer();

