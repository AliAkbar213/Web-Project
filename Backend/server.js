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

app.use((req, res) => {
    res.status(404);
});
