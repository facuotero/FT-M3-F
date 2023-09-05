const fs = require("fs");//file system
const utils = require("../utils/request");
const process = require("process");
const { request } = require("http");

function pwd(print) {
    print(process.cwd())//metodo para obtener el directorio de trabajo acual donde se encuentra el proceso Node.js en ejecucion
}

function date(print) {
    print(Date())
}

function echo(print,args) {
    print(args)
}

function ls(print) {
       fs.readdir('.',(error,files)=>{//file system.read directory
       if(error){
        throw error
    }
       print(files.join(' '))
    })
}

function cat(print,args) {
fs.readFile(args,'utf-8',(error,data) => {
    if(error){
        throw error
    }
    print(data)
})
}

function head(print,args) {
fs.readFile(args,'utf-8',(error,data)=>{
    if(error){
        throw error;
    }
    const firstLine = data.split("\n")[0].trim()
    print(firstLine);
})
}

function tail(print,args) {
    fs.readFile(args,'utf-8',(error,data)=>{
        if(error){
            throw error;
        }
        let lines = data.split("\n");
        let lastIndex = lines.length - 1;
        print(lines[lastIndex].trim());
    })
}

function curl(print,args) {
    utils.request(args, (error,response)=>{
       if(error){
        throw error;
       }
       print(response)
    })

}

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head,
    tail,
    curl
};
