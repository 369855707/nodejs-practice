const db = require('../models/db')
const formidable = require('formidable')

exports.index = (req, res) => {
    db.allEmployee(data => {
        res.render("list.ejs", {
            "resArr": data
        })
    });
}

exports.add = (req, res) => {
    res.render("add.ejs")
}

exports.insertOne = (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        db.insertOne(fields, (data) => {
            res.send(data)
        })
    })
}

// rest api
exports.allEmployees = (req, res) => {
    db.allEmployee(data => {
        res.json({ "results": data })
    });
}