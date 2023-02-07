import {createServer} from 'http'
import { fstat, readFile } from 'fs'
import {parse as URLparser} from 'url'

const server = createServer();
server.listen(80)

server.on('request',(req,res)=>{
    let urlpath=URLparser(req.url).pathname
    if(urlpath =='/'){
     readFile(`./index.html`,(err,data)=>{
          res.end(data)
         })
    }else{
     readFile(`.${urlpath}`,(err,data)=>{
          res.end(data)
         })
    }    
})