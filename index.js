const http = require(`http`);
const express = require("express");
const jwt = require('express-jwt');
const secret = {secret: process.env.SECRET || 'secret'}
const PORT = process.env.PORT || 3000;
const app = new express();



const usuarios = [
    {nombre: "adil", apellidos:"bakali tahiri", dni:77800612},
    {nombre: "mohtadi", apellidos:"bakali tahiri", dni:77800612},
    {nombre: "abdelmouniem", apellidos:"bakali tahiri", dni:77800612},
    {nombre: "badia", apellidos:"bakali tahiri", dni:77800612}
]




app.get('/',function(req,res){
    res.send("hola cebolinha")
});

app.get('/api/v1/usuarios', jwt(secret), (req, res) => {
  if(req.user.sub == 1234567890){
    res.send(usuarios)
  }
  res.status(401).send({message: "Uste no esta autorizado para ver esta ruta"})
    
   
})












app.listen(PORT, function (){
    console.log("servidor corriendo en el puerto " + PORT)
} )