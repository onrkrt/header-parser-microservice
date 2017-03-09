var express = require("express");
//var get_ip = require("ipware")().get_ip;
var app = express();

app.use((req,res)=>{
	var info = req.headers;
	// This algorithm inspired to
   	// http://stackoverflow.com/a/2403159
    	var pattern = /\(.*?\)/gi;
	var osInfo = pattern.exec(info["user-agent"])[0].slice(1,-1);
	var lang = info["accept-language"].split(",")[0];
	var ip = req.ip;
	var resp = {"ipaddress":req.ip,"language":lang,"software":osInfo}
	res.send(resp);
});

var port = Number(process.env.PORT || 5000);
app.listen(port);
