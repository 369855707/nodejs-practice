var formidable = require('formidable'),
    http = require('http'),
    url = require('url'),
    fs = require('fs'),
    path = require('path'),
    util = require('util');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

// 配置静态资源服务器，将public文件夹静态化出来
var serve = serveStatic('static', {'index': ['upload.html', 'upload.htm']})

http.createServer(function(req, res) {

  var pathname = url.parse(req.url).pathname;
  var extname = path.extname(pathname);
  console.log("pathname : " + pathname);
  console.log("extname : " + extname);

   if (pathname == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();
    form.uploadDir = "./upload_dir";
    form.encoding = 'utf-8';
    form.keepExtensions = true;
    form.parse(req, function(err, fields, files) {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
    return;
  }
  //使用静态资源
	serve(req, res, finalhandler(req, res));
}).listen(8080);

console.log("server is listening at port 8000");