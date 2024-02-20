const path = require("path");
const fs = require('fs/promises');
const http = require('http'); 

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
        }
    }
).listen(5500);