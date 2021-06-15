const express = require('express')
const colors = require('colors')
const products = require('./data/products')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()
connectDB()
const App = express()

App.get('/', (req, res) => {
    res.send('API is running...')
})

App.get('/api/products', (req, res) => {
    res.json(products)
})

App.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000

App.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))