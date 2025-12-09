import express from "express";

import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8000;

function name(req, res, next) {
	var street = req.body.street;
	var pet = req.body.pet;
	const name = street + pet;
	res.send(name);
	next();
}

//PENDING
app.get('/', (res, req) => {
	res.sendFile()	
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
