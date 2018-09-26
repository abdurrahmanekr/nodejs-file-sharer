var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');

const FILE_DIR = null;
const MAX_FILE_SIZE = null;
const LISTEN_PORT = null;

http.createServer(function (req, res) {
        if (req.url == '/fileupload') {
            var form = new formidable.IncomingForm();

            // default 10GB
            form.maxFileSize = Math.pow(1024, 3) * 10;

            form.parse(req, function (err, fields, files) {
                if (!files.filetoupload) {
                    console.log(err);
                    console.log(files);
                    res.write('File not uploaded!');
                    res.end();
                    return;
                }

                var oldpath = files.filetoupload.path;
                var newpath = FILE_DIR || path.join(__dirname, 'uploaded_files', files.filetoupload.name);

                fs.rename(oldpath, newpath, function (err) {
                    if (err) {
                        res.write('!ERROR! File not uploaded');
                        res.end();
                        throw err;
                    }

                    res.write('File uploaded and moved!');
                    res.end();
                });
            });
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
            res.write('<input type="file" name="filetoupload"><br>');
            res.write('<input type="submit">');
            res.write('</form>');

            return res.end();
        }
})
.listen(LISTEN_PORT || 1453);
