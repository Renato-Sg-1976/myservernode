const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const uri = "mongodb+srv://dbUser:test@cluster0-aa1jo.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });




// get tutti todos:
// chiedi http://localhost:7070/personaggi?colore=giallo&sesso=m
router.get('/', (req, res, next) => {
  client.connect((err) => {
    if(err){
      console.log('err');
    }
    console.log('conn');
  })
  
  const db = client.db("servernode");
  const collection = db.collection("todos");
  res.send(todos)
  //QUI POSSO COMMENTARE IL NEXT
  //next()
}, (req,res, next) => {

  console.log('FIRE 2')
}


)

// get singolo todo:
//http://localhost:5555/todos/5cda99611c9d440000db8d72
router.get('/:id/', (req, res) => {
  const id = Number(req.params.id)
  res.json(todos.todos.filter(todo => todo.id===id))
})






//post todo con titolo obbligatorio, e output json significativo:
router.post('/form', (req, res) => {
  
  const body = req.body
  const {titolo, descrizione} = req.body

  const status = {}
  console.log(titolo, descrizione)

  if (nome) {
    status.code = 'ok'
    status.message = `Valore: ${nome}`
  }
  else {
    status.code = 'error'
    status.message = 'titolo non valido'
    status.campo = 'nome'
  }
  res.send(status)
})









module.exports = router