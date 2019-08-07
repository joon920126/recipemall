import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
    return (
        <div className="container">
            <h1>this is Order</h1>
            <Link className="btn" to='/OrderCompleted'>Order</Link>
        </div>
    )
}

export default Order