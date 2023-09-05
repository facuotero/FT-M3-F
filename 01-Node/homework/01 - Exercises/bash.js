const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');
//process, objeto global.
//stdout (standard output) salida de la terminal.
//stdin accedemos al ingreso de la terminal

function bash() {
   process.stdout.write("prompt > ");//print en la terminal de node.js
   process.stdin.on("data",(data)=>{ //controlador de eventos
      const args = data.toString().trim().split(' ');
      const cmd = args.shift();

      if(!commands.hasOwnProperty(cmd)){
         print(`command not found: ${cmd}`)
      }else{
         commands[cmd](print, args);//propiedad cmd en el objeto commands que contiene una funcion recibiendo una callback print y argumentos.
      }
      // commands[cmd] ?
      // commands[cmd](print,args) :
      // print(`command not found: ${cmd}`)
   })

}

const print = (output) => {
   process.stdout.write(output);
   process.stdout.write("\nprompt > ");
}
bash();
module.exports = {
   print,
   bash,
};
