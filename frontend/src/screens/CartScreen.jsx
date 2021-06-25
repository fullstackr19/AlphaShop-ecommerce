import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Button, ListGroup, Image, FormControl } from 'react-bootstrap'
import { addToCart, removeFromCart } from "../actions/cartActions";
import Message from '../components/Message';

const CartScreen = ({ match, location, history }) => {

    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [productId, qty, dispatch])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkOutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <div>
            <Link className='my-5' to='/'><i class="far fa-arrow-alt-circle-left" style={{ fontSize: 48, color: '#ffffff' }}></i></Link>
            <h1 className='my-5'>Cart Screen</h1>
            <Row>
                <Col md={8}>
                    {cartItems.length === 0 ? ( 
                        <Message>
                            Your cart is empty! <Link to='/'>let's full your 🛒</Link>
                        </Message> 
                    ):(
                        <ListGroup variant='flush'>
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>{<Image src={item.image} alt={item.name} fluid rounded/>}</Col>
                                        <Col md={4}><Link to={`/api/product/${item.product}`}><h5>{item.name}</h5></Link></Col>
                                        <Col md={2}><h5>${item.price}</h5></Col>
                                        <Col md={3}>
                                            <FormControl as='select' value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                {
                                                    [...Array(item.countInStock).keys()].map(x => (
                                                        <option key={ x + 1 } value={ x + 1 }>{ x + 1 }</option>
                                                    ))
                                                }
                                            </FormControl>
                                        </Col>
                                        <Col md={1}>
                                            <Button type='button' variant='danger' onClick={() => removeFromCartHandler(item.product)}>
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
                <Col md={4}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h4>SubTotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h4>
                            <h5>
                                ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                            </h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='py-3 px-5 mx-auto' style={{display: 'block'}} disabled={cartItems.length === 0} onClick={checkOutHandler}>Proceed to checkout</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={2}></Col>
            </Row>
        </div>
    )
}

export default CartScreen
