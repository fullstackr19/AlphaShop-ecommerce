import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()
const App = express()

App.use(express.json)

App.get('/', (req, res) => {
    res.send('API is running...')
})

App.use('/api/products', productRoutes)
App.use('/api/users', userRoutes)

App.use(notFound)
App.use(errorHandler)

const PORT = process.env.PORT || 5000

App.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))