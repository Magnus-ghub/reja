const http = require('http');
const mongodb = require("mongodb");

let db;
const connectionString = 
"mongodb+srv://magnus:7HkHasiQHs8HwESn@cluster0.h2xiuv9.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0"


mongodb.connect(
    connectionString,
 {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, 
    (err, client) => {
    if(err) console.log("ERROR on connection to MongoDB");
    else {
        console.log("MongoDB connection succeed");
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3010;
        server.listen(PORT, function() {
        console.log(
            `The server is running on port: ${PORT}, http://localhost:${PORT}`
        );
        });
     }
});

