const express = require('express') //Requerimos Express
const router = express.Router();

// Ahora, CORTAMOS del fichero principal 01-express.js
// las dos rutas que tenemos: la principal ( / ) y la 
// de contactos ( /contaco )
// Importante que ya no usaremos el app.get(...), ahora
//vamos a utilizar las rutas, por lo que deberemos poner:
router.get('/', (req, res) => {
    res.render("index",{
        cabecera:"Index",
        titulo:"mi titulo dinámico"
    });
})

router.get('/contactos', (req, res) => {
    res.render("contactos",{
        cabecera:"Contacto",
        titulo:"Estamos en contacto de manera dinámica!!"
    });
})


// Por último, vamos a exportarlo:
module.exports = router;