const express = require('express');
const app = express();

app.listen(8000, function () {
    console.log('Server is running on port 8000');
});

app.get('/hello', function (req, res){
    res.send('Hello World!');
})

app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
})