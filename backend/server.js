const express = require('express')
const products = require('./data/products')
const dotenv = require('dotenv')

dotenv.config()
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

App.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))