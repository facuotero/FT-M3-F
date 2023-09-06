var fs = require("fs");
var http = require("http");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
const PORT = 3001;


/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */

  /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
  module.exports = http
  .createServer((request,response)=>{
    console.log(`Server raised in port ${PORT}`);
   
    if(request.url === "/api"){
      fs.readFile("../01 - Exercises/utils/dogsData.json", (error,data)=>{
        if(error){
          response.writeHead(404,{ "Content-Type" : "text/plain"})
          return response.end("json not found")
        }
          response.writeHead(200,{ "Content-Type" : "application/json" })
          return response.end(data)
      
      })
      return;
    }
    if(request.url === "/allDogs"){
      fs.readFile("utils/allDogs.html","UTF8",(error,data)=>{
        if(error){
          response.writeHead(404,{"Content-Type" : "text/plain"})
          return response.end("html not found");
        }
        response.writeHead(200,{"Content-Type" : "text/html"})
        return response.end(data)
      })
      return;
    }
    response.writeHead(404,{"Content-Type":"text/plain"});
    return response.end("Route not found")
  })
  .listen(PORT,"localhost")
