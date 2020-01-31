/**
 * 这个案例演示GET请求的参数如何获得
 **/

var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static');
var url = require("url");
var fs = require("fs");
var querystring = require("querystring");

// 配置静态资源服务器，将public文件夹静态化出来
var serve = serveStatic('public', {'index': ['index.html', 'index.htm']})

// Create server
var server = http.createServer(function onRequest (req, res) {

	//路由
	var pathname = url.parse(req.url).pathname;

	if(pathname == "/addStudent") {
		//拿到GET请求参数，就是拿到地址栏中的东西。
		var queryJSON = url.parse(req.url,true).query;
		 console.log(queryJSON.name);
		 console.log(queryJSON.age);
		 console.log(queryJSON.sex);

		//准备要写入文本文件的内容
		var data = "姓名：" + queryJSON.name + "\r\n";
		data += "年龄：" + queryJSON.age + "\r\n";
		data += "性别:" + queryJSON.sex + "\r\n";

		//我们写文件
		fs.writeFile("./student_data/" + queryJSON.name + ".txt",data,function(err){
			if(err){
				res.end("cuowu");
			}else{
				res.end("chenggong");
			}
			res.end("chenggong");
		});

		return;
	}
		
	//使用静态资源
	serve(req, res, finalhandler(req, res));
});

// Listen
server.listen(3000,"127.0.0.1");
console.log("服务器已经运行在3000端口");