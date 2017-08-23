const http = require("http");

var urlText = "";
var a = 0;
var b = 0;
var op = ""; 
var result = 0;

var server = http.createServer(function(req, res){

	if (req.url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end();
    // console.log('favicon removed');
    return;
}
	res.setHeader('Content-Type', 'text/html');
	urlText = req.url.split("/");
	console.log(urlText);
	op = urlText[1];
	a = parseInt(urlText[2]);
	b = parseInt(urlText[3]);
	result = operacii(a,b,op,funkcii);
	console.log(urlText+ "\n" + "operacija " + op + "\n" + "a= " + a + "\n" + "b= " +b);
	console.log("Rezultatot e: " + result);
	res.write("" + a + " " + op + " " + b + " = " + result);
	res.end('');

});

server.listen(8080);
console.log("Server running on port 8080");

var funkcii = {
	add: function(a, b){
		return a + b;
	},
	sub: function(a, b){
		return a - b;
	},
	div: function(a, b){
		return a / b;
	},
	mul: function(a, b){
		return a * b;
	}
};

function operacii(a, b, op, fn){
	return fn[op](a, b);
}