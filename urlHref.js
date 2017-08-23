const http = require("http");
const fs = require('fs');


var des = "";

var server = http.createServer(function(req, res){

	if (req.url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end();
    // console.log('favicon removed');
    return;
	}
	res.setHeader('Content-Type', 'text/html');
	// res.write(req.url);
	urlText = req.url.split("/")[1];

	fs.readFile(
				urlText, 
				'utf8',
				(err, content) => {
					if(err){
						throw err;
					} else {
						res.setHeader('Content-Type', 'text/html');
						res.end(content);
					}
				}
			);
	
	// res.end(des);
	
});

server.listen(8080);
console.log("Server running on port 8080");
