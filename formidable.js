var formidable = require('formidable');
const { fstat } = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            var oldpath = files.filetoupload.filepath;
            var newpath ='C:/Users/Shubham/'+files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function(err){
                if (err) throw err;
                res.write('file moved and uploaded');
                res.end();
            });
        });
    }else{
    res.writeHead(200, {'content-type':'text/html'});
    res.write('<form method="post" action="fileupload" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload">');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
    }
}).listen(2000);