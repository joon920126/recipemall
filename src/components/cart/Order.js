import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {

    const handleOrder = () => {
        console.log('handleOrder')
    }

    return (
        <div className="container Site-content">
            <div className="flow-text">주문하시겠습니까?
                <Link className="btn brown" to='/OrderCompleted' onClick={handleOrder}>주문하기</Link>
            </div>
        </div>
    )
}

export default Order