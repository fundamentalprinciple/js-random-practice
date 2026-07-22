const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017"
const client = new MongoClient(uri);

async function run() {
    await client.connect();
    const db = client.db('first');
    const collection = db.collection('posts');
    const first = await collection.findOne();
    console.log(first);
}

run();
