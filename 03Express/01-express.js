const express = require('express');
const app = express();
const port = 3005;
//Conexión a base de datos
const mongoose = require('mongoose');
//Variables que tendremos siempre:
//Lo correcto será declararlas EN VARIABLES DE ENTORNO
//para que nadie vea directamente nuestras credenciales
const user = 'cursonode';
const password = 'F0GlDTyX0lO6LH4g';
const dbname = 'dbpokemon';
const uri = `mongodb+srv://${user}:${password}@cluster0.h5usq7k.mongodb.net/${dbname}?retryWrites=true&w=majority`; //URL de conexión, que completaremos luego
mongoose.connect(uri,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e));
//Plantilla
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
//Middleware para controlar que solo acceda a las cosas públicas
app.use(express.static(__dirname+'/public'));
/**app.get('/', (req, res) => {
  
});
//Peticiones básicas
app.get('/contactos', (req, res) => {
    
});
app.use((req,res)=>{
    res.status(404).render("404",{
        cabecera:"404",
        titulo:"Error 404",
        descripcion:"Page Not Found"
    });
});**/
// Llamadas a las rutas
app.use("/", require("./router/rutas"));
app.use("/", require("./router/pokemon"));


// Si no se encuentra el recurso (Error 404) con página personalizada
app.use( (req, res) => {
    res.status(404).render("404",{
        cabecera:"404",
        titulo:"Error 404",
        descripcion:"Page Not Found"
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})