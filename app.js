const express = require ("express");
const app = express();
const path = require("path");

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
});


app.get("/detalle", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/detalleP.html"))
}); 

app.use(express.static("public"));

app.listen(8080,()=>{
    console.log("Puerto 8080 iniciado")
});

app.get("/header", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/header.html"))
});