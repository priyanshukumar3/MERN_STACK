const EventEmitter = require("events");
const emitter = new EventEmitter();


function register() {
    console.log("Registered Successfully");
    emitter.emit("event");
}

emitter.on("register", () => {
    console.log("EMAIL");
});
emitter.on("register", () => {
    console.log("LOGS");
});
emitter.on("register", () => {
    console.log("ANALYTICS");
});
emitter.on("register", () => {
    console.log("RECOMMENDATION");
});



// emitter.on("greet", () => {
//     console.log("Hello LPU");
// });

console.log("Hello Students");

// emitter.emit("greet");