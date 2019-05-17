const express = require('express')
const app = express()
let port = 8080


const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const uri = "mongodb+srv://dbUser:test@cluster0-aa1jo.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

// esercizio Nicola STEP1 - INIZIO
client.connect(err => {
    if (err){
    console.log('Error occured while connecting to MongoDB Atlas\n',err);
  } 
  console.log('Connected');

  const db = client.db("servernode");
  const collection = db.collection("todos");
  
  // read
  client.db("servernode").collection("todos").find().toArray(function(err, result){


    if (err) throw err
    const todos = result
    console.log(result)

    
  })
  
   client.close();
});

// esercizio Nicola STEP1 - FINE


app.use((req, res) =>{
    res.status(404).send('what ???')
})



app.listen(port)

console.log(`server running at http://127.0.0.1/${port}`);
