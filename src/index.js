var mv = require('mv');
var path = require('path');

var express = require('express');
var formidable = require('formidable');

var app = express();

const FILE_DIR = null;
const MAX_FILE_SIZE = null;
const LISTEN_PORT = null;

const publicPath = path.join(__dirname, 'public');
const upPath = path.join(__dirname, '..', 'uploaded_files');

app.use(express.static(publicPath));
app.use('/files', express.static(upPath));

app.post('/fileupload', function (req, res) {
    var form = new formidable.IncomingForm();

    // default 10GB
    form.maxFileSize = Math.pow(1024, 3) * 10;

    form.parse(req, function (err, fields, files) {
        if (!files.fileupload) {
            console.log("ERROR BAD REQUEST -", err, files);
            res.status(400).end('File not uploaded!');
            return;
        }

        var oldpath = files.fileupload.path;
        var newpath = FILE_DIR || path.join(__dirname, '..', 'uploaded_files', files.fileupload.name);

        mv(oldpath, newpath, function (err) {
            if (err) {
                console.log('ERROR -', err);

                res.status(500).end('!ERROR! File not uploaded');
            }
            else {
                console.log('SUCCESS -', newpath);

                res.end('File uploaded and moved!');
            }
        });
    });
});

app.listen(LISTEN_PORT || 1453, function (url) {
    console.log('NodeJS File SHARER open in ', url);
});
