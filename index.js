const express = require('express');
const morgan = require('morgan');
const app = express();

//Settings
app.set('appName', 'Express JS');
app.set('port', 3000);
app.set('view engine', 'ejs');

/*
function logger(req, res, next) {
  console.log("Request received");
  next();
}
*/

app.use(express.json()); //Middleware que se utiliza para leer json
//app.use(logger); //Middleware se ejecuta antes de una peticion
app.use(morgan('dev'));


/*------------------------------------------------------------------------------------*/
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

app.get('/pogues', (req,res) =>{
  const data = [{name:"Johnny B"},{name:"JJ"},{name:"Pope"}, {name:"Kiara"}];
  res.render('index.ejs', {pogues:data});
})

app.use(express.static('public'));


app.listen(app.get('port'), () => {
  console.log(`Server running ${app.get('port')}`);
});

/*------------------------------------------------------------------------------------*/

