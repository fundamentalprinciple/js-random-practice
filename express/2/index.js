import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res)=> {
	res.send('<div style="border:3px solid red;">Hello World!</div>');
});

app.get("/about", (req, res)=> {
	res.send('<div>Chai peelo</div>');
});

app.get("/contact", (req, res)=> {
 	res.send('<div>Chai peelo</div>');	
});

app.listen(port, () => {
	console.log('Server started');
});



