var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");

var mimeType = {
    ".jpg" : "image/jpeg",
    ".jpeg" : "image/jpeg",
    ".gif" : "image/png",
    ".png" : "image/png",
    ".html" : "text/html;charset=UTF-8",
    ".css" : "text/css",
    ".png" : "image/png",
    ".js" : "application/x-javascript"
}

http.createServer((req, res) => {
    var pathname = url.parse(req.url).pathname;
    var extname = path.extname(pathname);

    console.log("pathname : " + pathname + "--" + "extname : " + extname);

    if(!extname) {

        if(pathname.substr(-1) != "/") {
            res.writeHead(302, {
                'Location': pathname +'/'
              });
        }

        pathname += "/index.html";
    }

    fs.readFile("./static/" + pathname, function(err, data) {
        if(err) {
            res.end("no file was found");
            return;
        }
        if(mimeType.hasOwnProperty(extname)) {
            res.setHeader('Content-Type', mimeType[extname]);
        }
        res.end(data);
    })
}).listen(3000);