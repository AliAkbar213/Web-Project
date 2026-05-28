const express = require("express");
const data = require("./data/data");

const app = express();

app.listen(5000);

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname});
});
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname});
});
app.get('/order', (req, res) => {
    res.sendFile('./views/order.html', { root: __dirname});
});
app.get('/data', (req, res) => {
    setTimeout(
        () => {res.json(data)},3000
    );
});
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname});
});