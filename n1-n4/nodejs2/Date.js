var http=require('http');
var dt=require('./myfirstmodule');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':"text/html"});
    res.write("The Date and time are curently:" +dt.myDate());
    res.end();
}).listen(8080);