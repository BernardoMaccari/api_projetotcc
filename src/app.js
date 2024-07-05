//importar módulo express
const express = require("express");

//importar módulo fileupload
const fileupload = require("express-fileupload");

//importar módulo dotenv
const dotenv = require("dotenv").config();

const userRouter = require('./routes/userRouter')

const app = express();

//habilitando o upload de arquivos
app.use(fileupload());

//rota de mandar
app.post('/mandar', function(req, res) {
    
    console.log(req.body);
    console.log(req.files.arquivo.name);
    
    req.files.arquivo.mv(__dirname+'/arquivos/'+req.files.arquivos.name);
    res.end(); 
});

app.set("port", process.env.PORT || 3002);

const cors = require('cors');
app.use(express.json());
app.use(cors());

app.use('/api', userRouter);

module.exports = app;