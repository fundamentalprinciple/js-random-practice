import express from "express"

const app = express()
const port = 8000

app.get('/', (req, res)=>{
	res.send('<div style="border: 2px solid red">HELLO</div>');
});

app.post("/user", (req, res)=>{
	res.sendStatus(201);
	console.log(req );
});

app.listen(port, ()=>{
	console.log('Hi');
});
