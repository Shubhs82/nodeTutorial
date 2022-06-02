var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var filename = "."+q.pathname;
    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {'content-type':'text/html'});
            return res.end('ERROR! FILE NOT FOUND!!!');
        }
        else{
            res.writeHead(200, {'content-type':'text/html'});
            return res.end(data)
        }
    });
   
}).listen(2000);