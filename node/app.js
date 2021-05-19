var http = require('http');
var url = require('url')
http.createServer(function (request, response) {
    //request 客户端传过来的信息
    // response 响应
  console.log(url.parse(request.url))
  response.writeHead(200, {'Content-Type': "text/html;charset=utf-8"});
  response.write('22你好sss222')
  response.end();// 结束响应
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');