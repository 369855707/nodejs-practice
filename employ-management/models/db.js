var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/company"

const allEmployee = (callback) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        console.log('connected')
        var dbo = db.db('company')
        dbo.collection('employee').find({}).toArray((err, data) => {
            callback(data)
        })
        db.close();
    })
}

const insertOne = (fields, callback) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db('company')
        dbo.collection('employee').insertOne({
            "uname": fields.name,
            "age": fields.age,
            "sex": fields.gender,
            "province": fields.province
        }, (err, r) => {
            if (err) {
                console.log("insert failed");
                return;
            }
            console.log("insert successfully " + r.insertedCount + " row");
            callback("ok");
            db.close();
        })
    })
}

exports.allEmployee = allEmployee
exports.insertOne = insertOne
// allEmployee((data) => {
//     console.log(data)
// })