import express from 'express'
import asyncHandler from 'express-async-handler'
import { getProducts, getProductById } from '../controllers/productController.js'

const router = express.Router()

// @description     fetch all products
// @route           GET /api/products
// @access          public route
router.route('/').get(getProducts)


// @description     fetch single products
// @route           GET /api/products:id
// @access          public route
router.route('/:id').get(getProductById)

export default router