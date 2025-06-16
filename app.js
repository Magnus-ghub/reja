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
const mongodb = require("mongodb");

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
   console.log("user entered /create-item");
   const  new_reja = req.body.reja;
   db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
   });
});

app.get('/author', (req, res) => {
    res.render("author", { user: user });
});

app.post("/delete-item", (req,res) => {
    const id = req.body.id;
    
    db.collection("plans").deleteOne(
        {_id: new mongodb.ObjectId(id) },
        function(err, data)  {
        res.json({state: "success"});
    }
    );
});


app.post("/edit-item", (req, res) => {
    console.log("STEP 2: FRONTEND => BACKENDga kirib keladi");
    const data = req.body;
    console.log(data);
    console.log("STEP 3: BACKEND => DATABACEga kirib keladi");
    db.collection("plans").findOneAndUpdate(
        {_id: new mongodb.ObjectId(data.id)},
         {$set: {reja: data.new_input}}, 
         function(err, data) {
            console.log("STEP 4:DB => BACKENDga qaytib keladi");
            console.log("STEP 5:BACKEND FRONTENDga res jonatadi");
            res.json({state: "success"});
    }
  );
});


app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({ state: "hamma rejalar o'chirildi"});
        });
    }
});


app.get("/", function (req, res) {
    console.log('user entered /');
    db.collection("plans")
     .find()
     .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
             console.log(data);
             res.render("reja", { items: data });
        }
     });
});

module.exports = app;


