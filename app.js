const express = require ("express");
const app = express();
const path = require("path");

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
});

app.get("/registro", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/registro.html"))
});

app.use(express.static("public"));

app.listen(8080,()=>{
    console.log("Puerto 8080 iniciado")
});

