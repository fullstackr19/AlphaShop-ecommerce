const express = require('express')
const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')

const router = express.Router()

// @description     fetch all products
// @route           GET /api/products
// @access          public route
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))


// @description     fetch single products
// @route           GET /api/products:id
// @access          public route
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found!')
    }
}))

module.exports = router