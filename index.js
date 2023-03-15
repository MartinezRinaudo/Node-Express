const express = require('express');
const app = express();

app.use(express.json());

const message = '200 OK';
const fnHttpGet =  (req, res) => {
  //res.send(message);
  res.json({
    "username": "JohnnyB",
    "password":"1234"
  });
}
const fnHttpPostI =  (req, res) => {
  console.log(req.body)
  res.send(message);
}
const fnHttpPostII =  (req, res) => {
  console.log(req.body)
  console.log(req.params)
  res.send(`Parametro id: ${id}`)
  res.send(message);
}

app.all("/user", (req,res,next) => {
  console.log("Funcion All - Se llama en todas en las rutas");
  next();
});

/* HTTP METHODS:
  app.post('/route', callback);
  app.put('/route', callback);
  app.delete('/route', callback);
*/

app.get('/', fnHttpGet);

app.get('/about', fnHttpGet);

app.post('/user', fnHttpPostI);
app.get('/user/:id', fnHttpPostII);



app.listen(3000, () => {
  console.log("Server running")
});
