
const express = require('express');
const cors = require('cors'); 

const app = express();
const PORT = 3000;


app.use(express.json()); 
app.use(cors());

const rutasJuegos = require('./routes/juego.routes');
app.use('/api/juegos', rutasJuegos); 

app.listen(PORT, () => {
    console.log(`Servidor iniciado ${PORT}`);
});