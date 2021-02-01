const express = require("express");
const app = express();
const port = 8000;




app.use(express.static(__dirname + "/public"));

app.set('views', __dirname + '/vistas');
app.set('view engine', 'ejs');

const gatos = [
    {
        idgato: "gato1",
        nombre: "Anvorgueza",
        img: "gato1.jpg",
        comidafavorita: "Anvorgueza",
        edad: "3 años",
        sleepingposts: ["Arriba del sillón", "En la alfombra"]
    },
    {
        idgato: "gato2",
        nombre: "Yuumi",
        img: "gato2.png",
        comidafavorita: "Leeetchuga",
        edad: "2 meses",
        sleepingposts: ["En la cama del dueño","En la fiesta de los ratones"]
    },
    {
        idgato: "gato3",
        nombre: "Cristal",
        img: "gato3.jpg",
        comidafavorita: "Whiskas",
        edad: "4 meses",
        sleepingposts: ["Debajo del auto", "En una caja"]
    }
]

app.get("/cats", (req,res)=>{
    res.render("cats", { gatos : gatos });
});

app.get("/detalle", (req,res)=>{
    res.render("detalle", { gatos : gatos});
});

app.get("/detalle/:id", (req,res)=> {
    const idgatos = req.params.id;
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Gato: ${gatos[idgatos].idgato} </title>
            <link rel="stylesheet" href= "cats.css">
        </head>
        <body>
        <h1> ¡Bienvenido a mi página de Meme Gatos! </h1>
        <img src= "images/${gatos[idgatos].img}" alt="${gatos[idgatos].idgato}">
        <h3>Nombre: ${gatos[idgatos].nombre}</h3>
        <h3>Comida Favorita: ${gatos[idgatos].comidafavorita}</h3>
        <h3>Edad: ${gatos[idgatos].edad}</h3>
        <ul>
            <li>${gatos[idgatos].sleepingposts[0]}</li>
            <li>${gatos[idgatos].sleepingposts[1]}</li>
        </ul
    
        </body>
        </html>`
    );

});




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
