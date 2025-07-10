// const buf = Buffer.from("Hello");
// console.log("buffer: ", buf);

const buf2 = Buffer.alloc(10);
console.log("buffer", buf2);

buf2.write("Hello LPU");
console.log("buffer after string: ", buf2);
console.log("buffer to string: ", buf2.toString());

