var htutil=require("./newal");

exports.get=function(req,res){
	res.writeHead(200,{"Content-Type":"text/html"});
	res.end(
		htutil.page("Call Transporter",htutil.navbar(), [
			(!isNaN(req.a)? 
				("<br><br><p class='result'>{a} id has invoked the Transporter<br>{result}</p>"
					.replace("{a}",req.a)
					.replace("{result}","Tool Transporter Has Been Called! Please Wait patiently."))
				:""),
			"<p>Enter Id to call bot:</p>",
			"<form name='call' action='/call' method = 'get'>",
			"ID: <input type='text' name='a'/><br/>",
			"<input type='submit' value='Submit' />",
			"</form>"
			].join('\n'))
		);
}