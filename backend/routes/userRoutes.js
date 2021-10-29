import express from 'express'
import asyncHandler from 'express-async-handler'
import { getProducts, getProductById } from '../controllers/productController.js'
import { authUser } from '../controllers/userController.js'

const router = express.Router()

// @description     fetch all products
// @route           GET /api/products
// @access          public route
router.post('/login', authUser)

export default router