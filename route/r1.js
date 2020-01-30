var http = require("http");
var fs = require("fs");

http.createServer((req,res) => {

    console.log(req.url);

    if(req.url == "/haha.html") {
        fs.readFile("./b.html", function(err, data) {
            res.end(data);
        });
    } else if(req.url == "/css.css") {
        fs.readFile("./css.css", function(err, data) {
            res.end(data);
        });
    } else if(req.url == "/dog.jpg") {
        fs.readFile("./dog.jpg", function(err, data) {
            res.end(data);
        });
    } else if(req.url == "/test.js") {
        fs.readFile("./test.js", function(err, data){
            res.end(data);
        }); 
    }else {
        res.end("this page was not found");
    }
}).listen(3000);

console.log("server started at 3000 port");