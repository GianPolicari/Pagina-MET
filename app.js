const express = require('express'); //Requiero a express
const { dirname } = require('path');
const path = require('path');//Unifico la rutas

const app = express();

const publicPath = path.resolve(__dirname, './Public');
app.use( express.static (publicPath) ); // Hace que la carpeta public sea estatica

app.listen(3000, () => console.log('Esto fue muy exitoso!!'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './Public/views/index.html'));

});

app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, './Public/views/registro.html'));

});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './Public/views/login.html'));

});

app.get('/contacto', (req, res) => {
    res.sendFile(path.resolve(__dirname, './Public/views/contacto.html'));

});

app.get('/aboutUs', (req, res) => {
    res.sendFile(path.resolve(__dirname, './Public/views/aboutUs.html'));

});