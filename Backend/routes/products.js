const express = require('express')
const router = express.Router()

const {
    GetAllProducts,
    GetProductById,
    GetProductByCategory,
    GetCategories
} = require('../controller/productController.js')

router.get('/', GetAllProducts)

router.get('/category', GetCategories)

router.get('/category/:name', GetProductByCategory)

router.get('/:id', GetProductById)


// router.post('/', addProduct)

// router.delete('/:id', DeleteProduct)

// router.patch('/:id', UpdateProduct)

module.exports = router