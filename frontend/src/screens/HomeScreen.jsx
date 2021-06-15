import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from '../components/Product'

import { Row, Col } from 'react-bootstrap' 

const HomeScreen = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')
            setProducts(data)

            // this is implemented by destructuring data from the response (res) got from the GET request
            // however this can also be written as 
            // const res = await axios.get('/api/products')
            // and access the data as res.data 
        }    

        fetchProducts()
    }, [])

    return (
        <>
            <h1>Latest Products</h1>
            <Row className='my-5'>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}    
            </Row>   
        </>
    )
}

export default HomeScreen
