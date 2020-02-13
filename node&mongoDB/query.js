const MongoClient = require('mongodb').MongoClient;

// Connection URL
const dburl = 'mongodb://localhost:27017';

// Use connect method to connect to the Server
MongoClient.connect(dburl, function (err, client) {
    if (err) {
        console.log("mongod please.");
        return;
    }
    console.log("connected successful");

    const col = client.db("student").collection('classroom');

    // col.find($or : [{""}])
    /**
     * {
            "age": { "$gt": 22 },
            "name": "小hong"
        }
     */
    col.find({ age: { $gt: 19 } }).toArray((err, results) => {
        if (err) {
            console.log("query failed");
            return;
        }
        console.log(results);
        client.close();
    })
});
