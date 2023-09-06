const http = require('http'); //traemos el modulo de http para poder trabajar con el servidor

http
.createServer((request,response) => { //creamos un servidor
    response.writeHead(200,{ "Content-type" : "text/plain" }) //status, json con el tipo de dato que voy a estar mandando
    response.end("Holi! Creaste tu primer server") //Respuesta del servidor
    //console.log(request.url) todo lo que ponga despues del servidor me llega a request.url.
    //Poder agarrar esto me permite crear rutas en el backend. Cada ruta da una respuesta distinta.
    
    //RUTAS BACKEND - CONDICIONALES
    if(request.url === '/users'){
        response.writeHead(200,{ "Content-type" : "application/json" }) //appjson: le vamos a pasar codigo js.
        
        const users = [
            {id: 1, name:'Facundo'},
            {id: 2, name:'Leo'},
            {id: 3, name:'Andres'},
            {id: 4, name:'Messi'}
        ]
        
        return response.end(JSON.stringify(users)); //ponemos return porque la respuesta sola no corta la ejecucion.
        //La informacion viaja en formato JSON. Del servidor mandamos la info en JSON y despues el cliente la pasa a JS.
    }
    if(request.url === '/posteos'){
        response.writeHead(200,{ "Content-type" : "text/plain" })
       return response.end("Ruta para posteos")
    }
    else{
        response.writeHead(404,{ "Content-type" : "text/plain" })
        return response.end("A donde vas maravilla")
    }
})
.listen(3008,"localhost")//1er: puerto donde vamos a trabajar. 2do: hostname (string) localhost = yo.
