import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
    return (
        <div className="container">
            <div className="flow-text">주문하시겠습니까?
                <Link className="btn brown" to='/OrderCompleted'>주문하기</Link>
            </div>
        </div>
    )
}

export default Order