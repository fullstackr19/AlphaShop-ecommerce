import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'  

const ProductScreen = ({ match }) => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/products/${match.params.id}`)

            setProduct(data)
        }

        fetchProduct()
    }, [match.params.id])

    return (
        <>
            <Link className='my-5' to='/'><i class="far fa-arrow-alt-circle-left" style={{ fontSize: 48, color: '#ffffff' }}></i></Link>
            <Row>
                <Col md={6}>
                    <h2 className='my-5'>{product.name}</h2>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup className='my-5' variant='flush'>
                        <ListGroup.Item>
                            <p>{product.description}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>price: ${product.price}</h5>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3} className='my-5'>
                    <Card>
                        <ListGroup>
                            <ListGroup.Item>
                                <Row>
                                    <Col>price:</Col>
                                    <Col><strong>{product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Stock:</Col>
                                    <Col><strong>{product.countInStock > 0 ? 'Available' : 'Out of Stock'}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Button className='btn-block py-3' type='button' disabled={ product.countInStock > 0 ? false : true }>Add to cart</Button>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
