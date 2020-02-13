const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const dburl = 'mongodb://localhost:27017/student';

// Use connect method to connect to the Server
MongoClient.connect(dburl, function (err, db) {
    if (err) {
        console.log("mongod please.");
        return;
    }

    console.log("connected successful");
});
