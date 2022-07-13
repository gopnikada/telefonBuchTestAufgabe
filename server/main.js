const express = require('express')
const app = express()
const port = 3030
const fs = require("fs");
const bodyParser = require('body-parser');

const cors = require('cors')


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/getContacts', (req, res) => {
    fs.readFile('./data/telefonbuch.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const json = JSON.parse(data)
        res.send(json)
    });
})

app.get('/api/test', (req, res) => {
   res.send("Hello")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})