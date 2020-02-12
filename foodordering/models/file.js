const MongoClient = require('mongodb').MongoClient;
const fs = require("fs");
var baseurl = 'data/';

exports.save = (phone, food, callback) => {
    fs.writeFile(baseurl + phone + ".txt", food, callback);
}

exports.readAllFiles = (callback) => {
    fs.readdir(baseurl, function (err, files) {
        callback(files);
    })
}

exports.readonefile = (phone, callback) => {
    fs.readFile(baseurl + phone, (err, data) => {
        if (err) throw err;
        callback(data);
    })
}

exports.mongoSave = (phone, food, callback) => {

    // Connection URL
    const dburl = 'mongodb://localhost:27017';

    // Use connect method to connect to the Server
    MongoClient.connect(dburl, function (err, client) {
        if (err) {
            console.log("mongod please.");
            return;
        }
        console.log("connected successful");

        const col = client.db("food").collection('orders');

        col.insertOne({
            "food": food,
            "phone": phone
        }, (err, r) => {
            if (err) {
                console.log("insert failed");
                return;
            }
            console.log("insert successfully " + r.insertedCount + " row");

            client.close();
        })
    });
}
