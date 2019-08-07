import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div className="container">
            <h1>this is Cart</h1>
            <Link className="btn" to='/Order'>Order</Link>
        </div>
    )
}

export default Cart