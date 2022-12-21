var http = require('http').createServer(webServer),//El on lo hemos traido aqui arriba al pasar le funcion por parametro
    fs = require('fs'),//file system
    index = fs.createReadStream('recursos/index.html')

function webServer(req, res)
{
    res.writeHead(200, {'Content-Type':'text/html'})
    index.pipe(res)//Pasas el contenido de la variable index a la respeusta
}

http.listen(3005)

console.log('Servidor corriendo en http://localhost:3005/')