import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'  
import { listProductdetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductScreen = ({ history, match }) => {

    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductdetails(match.params.id))
    }, [dispatch, match.params.id])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <>
            <Link className='my-5' to='/'><i class="far fa-arrow-alt-circle-left" style={{ fontSize: 48, color: '#ffffff' }}></i></Link>
            { loading ? (
                <Loader/>
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
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
                                {product.countInStock > 0 ? (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <FormControl as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                                    {
                                                        [...Array(product.countInStock).keys()].map(key => (
                                                            <option key={key} value={ key + 1 }>{ key + 1 }</option>
                                                        ))
                                                    }
                                                </FormControl>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ) : ('')}
                                <ListGroup.Item>
                                    <Row>
                                        <Button className='btn-block py-3' type='button' onClick={addToCartHandler} disabled={ product.countInStock > 0 ? false : true }>Add to cart</Button>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    )
}

export default ProductScreen


