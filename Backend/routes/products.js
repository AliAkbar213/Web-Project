const express = require('express')
const router = express.Router()

const {
    GetAllProducts,
    GetProductById
} = require('../controller/productController')

router.get('/', GetAllProducts)

router.get('/:id', GetProductById)

// router.post('/', addProduct)

// router.delete('/:id', DeleteProduct)

// router.patch('/:id', UpdateProduct)

module.exports = router