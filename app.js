const express = require('express');

const app = express();

app.listen(3000, () => console.log('Esto fue muy exitoso!!'));

app.get('/', function(req,res){
    res.send('Html')
})