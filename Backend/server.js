require("dotenv").config()

const express = require("express");
const productRoutes = require("./routes/products");

const app = express();
app.listen(process.env.PORT, () => {
    console.log(`hello ${process.env.PORT}`);
    
});
app.use(express.json()) // for parsing json content of incoming request

app.use('/api/products', productRoutes)

app.use((req, res) => {
    res.status(404);
});
