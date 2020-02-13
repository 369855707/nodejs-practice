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
    //增量更新
    col.updateOne({
        "name": "小huang"
    }, { $set: { age: 333 } }, (err, r) => {
        if (err) {
            console.log("updated failed");
            return;
        }
        console.log("updated successfully " + r.modifiedCount + " row");

        client.close();
    })
});
