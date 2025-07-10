const http = require('http');
const fs = require("fs");

// const server = http.createServer((req, res) => {
//     console.log("server is available");
//     console.log(req.url);
//     if(req.url == "/") {
//         const htmlData = fs.readFileSync("home.html", { encoding: "utf-8"});
//         res.writeHead(200, { "Content-Type": "text/home" });
//         res.end(htmlData);
//     }
//     else if(req.url == "/about") {
//         const htmlData = fs.readFileSync("about.html", { encoding: "utf-8"});
//         res.writeHead(200, { "Content-Type": "text/about" });
//         res.end(htmlData);
//     }
//     else if(req.url == '/contact') {
//         const htmlData = fs.readFileSync("contact.html", { encoding: "utf-8"});
//         res.writeHead(200, { "Content-Type": "text/contact" });
//         res.end(htmlData);
//     }


//     // const htmlData = fs.readFileSync("index.html", { encoding: "utf-8"});
//     // res.writeHead(200, { "Content-Type": "text/html" });
//     // // res.end("<h1>Hello LPU</h1>");
//     // // res.end(htmlData.toString());
//     // res.end(htmlData);
// });


const server = http.createServer((req, res) => {
    console.log("server is available");
    const student = {
        name: "Aditya",
        college: "LPU"
    };
    
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(student));
});

server.listen(3001, () => {
    console.log("Server is live on port 3001");
});
