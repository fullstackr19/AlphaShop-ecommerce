import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

// @description     Auth user & get token
// @route           POST /api/users/login
// @access          public route
const authUser = asyncHandler( async (req, res) => {
    const { email, password } = req.body
    res.send({email, password})
})

export {
    authUser
}