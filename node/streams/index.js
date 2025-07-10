const fs = require("fs");

const stream = fs.createReadStream("index.txt", {
    encoding: "utf-8",
    highWaterMark: 2
});

const writeStream = fs.createWriteStream("output.txt");

// stream.on("data", (chunks) => {
//     console.log("Reading stream...", chunks);
//     writeStream.write(chunks, () => {
//         console.log("write:");
//     });
    
// });

const fs = require("fs");
const zlib = require("zlib");
const gzip = zlib.createGzip();
fs.createReadStream("input.txt")
    .pipe(gzip) // transform stream
    .pipe(fs.createWriteStream("input.txt.gz"));