const express = require('express')
const router = express.Router()

const {
    getAllProducts,
    getProductById,
    addProduct,
    UpdateProduct,
    DeleteProduct
} = require('../controller/productController')

router.get('/', getAllProducts)

router.get('/:id', getProductById)

router.post('/', addProduct)

router.delete('/:id', DeleteProduct)

router.patch('/:id', UpdateProduct)

module.exports = router