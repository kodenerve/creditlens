import http from 'node:http';
import {createReadStream} from 'node:fs';
import {stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('./dist/',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.wasm':'application/wasm','.png':'image/png','.svg':'image/svg+xml','.txt':'text/plain; charset=utf-8','.traineddata':'application/octet-stream'};
const port=Number(process.env.PORT||3000);
http.createServer(async(req,res)=>{try{if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);res.end();return}let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let file=path.resolve(root,'.'+pathname);if(file!==path.resolve(root)&&!file.startsWith(root)){res.writeHead(403);res.end('Forbidden');return}let info=await stat(file);if(info.isDirectory()){file=path.join(file,'index.html');info=await stat(file)}if(!info.isFile())throw Error('Not a file');res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Content-Length':info.size,'X-Content-Type-Options':'nosniff'});if(req.method==='HEAD'){res.end();return}let stream=createReadStream(file);stream.on('error',()=>res.destroy());stream.pipe(res)}catch{res.writeHead(404,{'Content-Type':'text/plain'});res.end('File not found')}}).listen(port,'0.0.0.0',()=>console.log(`CreditLens running at http://localhost:${port}`));
