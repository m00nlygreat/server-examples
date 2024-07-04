const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static(__dirname + '/public'));

app.listen(8080, () => {
    console.log('listening on port 8080');
    })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    })

    app.get('/todos', (req, res) => {
        json = fs.readFileSync(__dirname + '/public/todos/0001.json');
        res.send(json);
        })