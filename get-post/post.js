/**
 * 这个案例演示POST请求的参数如何获得
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

	if(pathname == "/addStudent"){
		// 定义了一个content变量，用于暂存请求体的信息
	    var content = "";     
	 
	    // post请求经常会很长，此时会分段，网上有文章大约800k左右是一个HTTP报文段
	    req.on('data', function(chunk){  
	    	console.log("收到了一个段落")
	    	//将段落合并
	        content += chunk;
	    });
	 
	    // 当所有数据发送完毕之后，此时将会触发end事件
	    req.on('end', function(){    
	        content = querystring.parse(content);
	        
	       	//准备要写入文本文件的内容
			var data = "姓名：" + content.name + "\r\n";
			data += "年龄：" + content.age + "\r\n";
			data += "性别:" + content.sex + "\r\n";

			//我们写文件
			fs.writeFile("./student_data/" + content.name + ".txt",data,function(err){
				if(err){
					res.end("cuowu");
				}else{
					res.end("chenggong");
				}
			});
			
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