import React from 'react'
import { Link } from 'react-router-dom'

const CartScreen = () => {
    return (
        <div>
            <Link className='my-5' to='/'><i class="far fa-arrow-alt-circle-left" style={{ fontSize: 48, color: '#ffffff' }}></i></Link>
            <h1 className='my-5'>Cart Screen</h1>
        </div>
    )
}

export default CartScreen
