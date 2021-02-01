const express = require("express");
const app = express();
const port = 8000;




app.use(express.static(__dirname + "/public"));

app.set('views', __dirname + '/vistas');
app.set('view engine', 'ejs');

app.get("/index" , (req,res)=> {

    res.render("vistaservidor");

});

app.get("/cats" , (req,res)=> {

    let paginaCats = {
        
        titulo: "Bienvenido a la página de Cats",    
        contenido: "Esto es la página principal de Cats, podrás encontrar variedad de memes de gatos",
        gatouno: "images/gato1.jpg",
        gatodos: "images/gato2.png",
        gatotres: "images/gato3.jpg"

    }

    
    res.render("cats", paginaCats );

});

app.get("/cars" , (req,res)=> {

    let paginaCars = {
        
        titulo: "Bienvenido a la página de Cars",    
        contenido: "Esto es la página principal de Cars, podrás encontrar variedad de vehículos deportivos",
        autouno: "images/ferrari.jpg",
        autodos: "images/lamborghini.jpg",
        autotres: "images/mustang.jpg"

    }

    
    res.render("cars", paginaCars );

});




app.listen( port, () => console.log(`Listening on port: ${port}`) );
