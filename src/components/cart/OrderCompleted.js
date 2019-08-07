import React from 'react'
import { Link } from 'react-router-dom'

const OrderCompleted = () => {
    return (
        <div className="container">
            <h1>this is OrderCompleted</h1>
            <Link className="btn" to='/'>Return to Main</Link>
        </div>
    )
}

export default OrderCompleted