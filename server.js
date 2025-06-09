const http = require('http');
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://magnus:zhvK8MSqc5mukvlL@cluster0.h2xiuv9.mongodb.net/";

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifieldTopology: true,
}, (err, client) => {
    if(err) console.log("ERROR on connection to MongoDB");
    else {
        console.log("MongoDB connection succeed");
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function() {
        console.log(`The server is running on port: ${PORT}, http://localhost:${PORT}`);
        });
     }
});

