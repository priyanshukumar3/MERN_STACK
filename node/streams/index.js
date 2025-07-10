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

