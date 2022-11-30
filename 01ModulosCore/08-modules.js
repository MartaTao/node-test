var myData = require('./my-data')//No es necesaria la extensión .js/.json

console.log(
    myData.nombre,
    myData.correo,
    myData.telefono
)
var reloj = require("./07-event-inherit");

var miReloj = new reloj();

miReloj.on("tictac", ()=>{
    miReloj.theTime();
});