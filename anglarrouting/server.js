var express = require(express);
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
	res.redirect('route.html');
})


app.listen(3000);
console.log('running');