const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

dotenv.config()
connectDB()
const App = express()

App.get('/', (req, res) => {
    res.send('API is running...')
})

App.use('/api/products', productRoutes)

App.use(notFound)
App.use(errorHandler)

const PORT = process.env.PORT || 5000

App.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))