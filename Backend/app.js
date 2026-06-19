const express = require("express");
const data = require("./data/data");
const mysql = require("mysql");

const con = mysql.createConnection({
    "host" : "localhost"
})

const app = express();
app.listen(5000);
app.get('/products/:id', (req, res) => {
    const id = req.params.id ;
    const product = data.find( x => x.id == id );
    res.send(product);
});
app.get('/products', (req, res) => {
    setTimeout(
        () => res.send(data)
        ,1000
    );
});
app.use((req, res) => {
    res.status(404);
});