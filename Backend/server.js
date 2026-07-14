require("dotenv").config()
const express = require("express");
const productRoutes = require("./routes/products");
const cors = require("cors")

const app = express();
app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://bytesale.netlify.app"
    ]
}));

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});
app.use(express.json()) // for parsing json content of incoming request

app.use('/api/products', productRoutes)

app.use('/images', express.static('images'))

// test function

app.use('/img', (req, res) => {
    res.json({
        "id": 1,
        "name": "Samsung A26",
        "price": 79.900,
        "image": "/images/a26.jpeg"
    })
})

app.use((req, res) => {
    res.status(404);
});
