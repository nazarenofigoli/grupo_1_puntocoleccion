const express = require ("express");
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

app.get("/registro", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/registro.html"))
});

app.post ('/registro',(req,res)=>{
    console.log(req.body);
    res.redirect("/");
    })


app.get("/carrito", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/carrito.html"))
});

app.use(express.static("public"));

app.listen(8080,()=>{
    console.log("Puerto 8080 iniciado")
});

app.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
});
