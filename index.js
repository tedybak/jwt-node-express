const http = require(`http`);
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = new express();



app.get('/',function(req,res){
    res.send("hola cebolinha")
})

app.listen(PORT, function (){
    console.log("servidor corriendo en el puerto " + PORT)
} )