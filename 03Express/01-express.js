const express = require('express');
const app = express();
const port = 3005;
//Plantilla
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
//Middleware para controlar que solo acceda a las cosas públicas
app.use(express.static(__dirname+'/public'));
app.get('/', (req, res) => {
  res.render("index",{
    cabecera:"Index",
    titulo:"mi titulo dinámico"
});
});
//Peticiones básicas
app.get('/contactos', (req, res) => {
    res.render("contactos",{
        cabecera:"Contacto",
        titulo:"Estamos en contacto de manera dinámica!!"
    });
});
app.use((req,res)=>{
    res.status(404).render("404",{
        cabecera:"404",
        titulo:"Error 404",
        descripcion:"Page Not Found"
    });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});