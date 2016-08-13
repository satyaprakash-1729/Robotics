var port=7000;
var http = require("http");
var htutil = require("./newal");

var server = http.createServer(function(req,res){
	htutil.loadParams(req,res,undefined);
	var val = req.a;
	console.log(Number(val));
	if(req.requrl.pathname==='/'){
		require("./home-node").get(req,res);
	}else if(req.requrl.pathname==='/call'){
		require("./call").get(req,res);
	}else{
		res.writeHead(404,{"Content-Type":"text/plain"});
		res.end("bad URL "+res.url);
	}
});

server.listen(port);
console.log("listening to http://localhost:7000");