var htutil=require("./newal");

exports.get=function(req,res){
	res.writeHead(200,{"Content-Type":"text/html"});
	res.end(
			htutil.page("Tool Transporter",
				htutil.navbar(),
				"<p><h4>by</h4>Robotics Club</p>")
		);
}