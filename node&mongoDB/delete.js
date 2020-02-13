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

    const col = client.db("student").collection('banji');

    col.deleteMany({
        "age": 12
    }, (err, r) => {
        if (err) {
            console.log("insert failed");
            return;
        }
        console.log("delete successfully " + r.deletedCount + " row");
        client.close();
    })
});
