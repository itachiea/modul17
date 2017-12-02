var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var datstring;

app.use(bodyParser.json());

app.get('/getnote', function(req, res) {
    console.log('GET ok');
    fs.readFile('./test.json', 'utf-8', function(err, data) {
        if (err) throw err;
        datstring = data;
        res.send(data);
    });
});

app.post('/updatenote/:note', function(req, res) {
    console.log('POST ok');
    datstring = req.params.note;
        fs.writeFile('./test.json', datstring, function(err) {
            if(err) throw err;
            console.log('dane dodane do pliku "test.json"');
        });
});

app.listen(3000);