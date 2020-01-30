var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
var querystring = require("querystring");

http.createServer((req, res) => {
    //convert into json object
    var urlJson = url.parse(req.url,true);
    
    var pathname = urlJson.pathname;

    var extname = path.extname(pathname);

    var qs = urlJson.query;
    var qsJson = querystring.parse(qs);

    console.log("pathname : " + pathname);
    console.log("extname : " + extname);
    console.log("qsJson :" + qsJson);

    res.end("");
}).listen(3000);

console.log("server started at port 3000");