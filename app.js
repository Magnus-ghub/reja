console.log('Web serverni boshlash');
const express = require("express");
const res = require("express/lib/response");
const app = express();
const fs = require("fs");
const { availableParallelism } = require("os");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
});

// MongoDB chaqirish
const db = require("./server").db();


// 1: Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2:  Session
// 3: Views kodlar
app.set("views",  "views");
app.set("view engine", "ejs");


// 4 Routing kodlar
app.post("/create-item", (req, res) => {
    // TODO: code db with here
});

app.get('/author', (req, res) => {
    res.render("author", { user: user });
});

app.get("/", function (req, res) {
    res.render("reja");
});

module.exports = app;


