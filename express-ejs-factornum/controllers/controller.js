var math = require("../models/math.js")
var file = require("../models/file.js")

exports.index = (req, res) => {
    res.render("index");
}

exports.results = (req, res) => {
    var number = req.params.number;
    console.log(number);
    var T1 = new Date();
   
    file.read(number,function(resultsArr) {
        if(resultsArr == -1) {
            var resultsArr = math.calc(number);
            file.save(number,resultsArr);   
        }
        var T2 = new Date();
        res.render("result",{
            "number" : number,
            "resArr" : resultsArr,
            "during" : T2 - T1
        });
    });
}