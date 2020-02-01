var fs = require("fs");

exports.save = function(number, resultsArr) {
    fs.writeFile("./data/" + number + ".txt", JSON.stringify(resultsArr));
}

exports.read = function(number, callback) {
    fs.readFile("./data/" + number + ".txt", function(err, data) {
        if(err) {
            callback(-1);
            return;
        }
        callback(JSON.parse(data));
    });
}