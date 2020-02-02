const fs = require("fs");
var baseurl = 'data/';

exports.save = (phone, food, callback) => {
    fs.writeFile(baseurl + phone + ".txt", food, callback);
}

exports.readAllFiles = (callback) => {
    fs.readdir(baseurl, function(err, files) {
        callback(files);
    })
}
 exports.readonefile = (phone, callback) => {
    fs.readFile(baseurl + phone , (err, data) => {
        if (err) throw err;
        callback(data);
    })
}
