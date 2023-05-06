var express = require("express")
var app = express();

const http = require('http');
const server = require('http').Server(app);
const io = require('socket.io')(server);
// const PORT = process.end.PORT || 8000;

const defURL = "http://localhost:8080/"

app.use(express.static('public'));

app.set("view engine", "ejs");

app.get("/vote", function(req, res){
res.render("partial/vote", {socketURL:defURL});
});
app.get("/result", function(req, res){
res.render("partial/result", {socketURL:defURL});
});

io.sockets.on('connection', function(socket){
	socket.on('vote_lp', function(vote){
	io.emit('vote_lp', vote);
	});

	socket.on('vote_pc', function(vote){
	io.emit('vote_pc', vote);
	});
});

server.listen(8080);
console.log("server is listening on port: 8080");


