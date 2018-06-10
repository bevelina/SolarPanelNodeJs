const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    var http = require("https");
    var weather;
    var request = http.get("https://api.solcast.com.au/radiation/forecasts?longitude=149.117&latitude=-35.277&api_key=pog7LOlOARQGdS-Ff9LrzlBt6M0cP89X&format=json", function(response){

		var body = "";
		response.on("data", function(jsonData){
            body += jsonData;
		});
		response.on("end", function(){
            var solarPanel = JSON.parse(body);
            console.log(solarPanel);
            res.status(200).json({
                body : solarPanel
            });
        });
    });

	request.on("error", function(error){
		console.log(error.message);
	});

    
});


module.exports = router;