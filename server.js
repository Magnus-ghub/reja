console.log('Web serverni boshlash');
const express = require("express");
const app = express();
const http = require('http');


// 1: Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2:  Session
// 3: Views kodlar
app.set("views",  "views");
app.set("view engine", "ejs");


// 4 Routing kodlar
app.get("/hello", function (req, res) {
    res.end("<h1>HELLO WORLD</h1>");
});
app.get("/gift", function (req, res) {
    res.end("<h1>Siz sovg'alar sahifasidasi!</h1>");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running on port: ${PORT}`);
});