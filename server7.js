var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');
app.use('/store',function(req, res, next) {
    console.log('Pośrednik między żądaniem a odpowiedzią');
    next();
});

//app.use(express.static('assets'));

app.get('/', function(req, res){
    res.render('main-template');
});

app.get('/auth', function(req, res){
    res.render('auth-google');
});

app.get('/auth-google-pass', function(req, res){
    res.render('auth-google-pass');
});

app.get('/store', function(req, res) {
    res.send('To jest sklep');
});

/*app.get('/first-template', function(req, res){
    res.render('first-template');
});*/

app.listen(3000);
app.use(function(req, res, next){
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});

