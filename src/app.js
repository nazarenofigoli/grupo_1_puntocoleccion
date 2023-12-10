var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');

const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/usersRouter');
const productRouter = require('./routes/productRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
res.status(err.status || 500);
res.render('error');
});

module.exports = app;



/*const express = require ("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
});

app.get("/detalle", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/detalleP.html"))
}); 

app.get("/carrito", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/carrito.html"))
});

app.get("/registro", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/registro.html"))
});

app.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
});

app.post ('/registro',(req,res)=>{
    console.log(req.body);
    res.redirect("/");
    })

app.post ('/login',(req,res)=>{
    console.log(req.body);
    res.redirect("/");
    });

    app.use(express.static("public"));

    app.listen(8080,()=>{
        console.log("Puerto 8080 iniciado")
    });
*/
