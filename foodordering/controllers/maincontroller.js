
const formidable = require('formidable');
const file = require('../models/file');


exports.saveOrder = (req,res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields) {
        var food = fields.food;
        var phone = fields.phone;
        file.save(phone, food, (err) => {
            if(err) {
                res.send("-1")
            } else {
                res.send("1")
            }
        });
    })
}

exports.showAllOrders = (req,res) => {
    file.readAllFiles(function(files){
        res.render("allorders.ejs",{
            orders : files
        })
    })
}

exports.oneorder = (req, res) => {
    file.readonefile(req.params.phone, (data) => {
        res.render('oneorder.ejs',{
            food : data
        })
    })
}