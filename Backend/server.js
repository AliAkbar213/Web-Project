const express = require("express");
const productRoutes = require("./routes/products");

const app = express();
app.listen(5000);
app.use(express.json()) // for parsing json content of incoming request

app.use('/api/products', productRoutes)

app.use((req, res) => {
    res.status(404);
});
