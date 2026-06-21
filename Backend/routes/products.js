const express = require('express')
const router = express.Router()

const {
    getAllProducts,
    getProductById,
    addProduct
} = require('../controller/productController')

router.get('/', getAllProducts)

router.get('/:id', getProductById)

router.post('/', addProduct)

router.delete('/:id', (req, res) => {
    res.json({msg : "Delete request sent"})
})

router.patch('/:id', (req, res) => {
    res.json({msg : "Patch request sent"})
})

module.exports = router