require("dotenv").config()
const express = require("express");
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/user");
const cors = require("cors");
const session = require("express-session");

const app = express();
app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://bytesale.netlify.app"
    ],
    credentials: true
}));

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});
app.use(express.json()) // for parsing json content of incoming request

app.use(session({
    secret: 'test',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        secure: false
    }
}))

app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)

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
