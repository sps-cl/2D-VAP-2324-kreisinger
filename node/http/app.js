const path = require("path");
const fs = require('fs/promises');
const http = require('http'); 
const { error } = require("console");

http.createServer(
    (req,res) => {
        if (req.url === "/"){
            fs.readFile(path.join(__dirname, "index.html")).then (
                (file) => {
                    res.writeHead(200,{
                        "content-Type" : "text/html"
                    });
                    res.write(file);
                    res.end();
                }
            )
        }else if (req.url.match(".css")){
fs.readFile(path.join(__dirname,req.url)).then(
    (file) => {
        res.writeHead(200,
            {
                "content-Type" : "text/css"
            }    
        );
        res.write(file);
        res.end();
    }
).catch((error) =>{
    console.log (error);
    res.end();
}
)
        }
    }
).listen(5500);

