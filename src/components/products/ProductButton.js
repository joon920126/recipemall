import React from 'react'
import { Link } from 'react-router-dom'

const ProductButton = ({product}) => {

    const handleClick = (e) => {
        console.log(`Button clicked: ${product.name}`)
    }

    return (
        <div className="col s6 l3">
            <div className="card hoverable">
                <div className="card-image">
                    <Link to={'/product/' + product.id} key={product.id}><img src={product.img} alt=""/></Link>
                    <i className="fas fa-shopping-cart halfway-fab btn-floating center pink lighten-4" onClick={handleClick}></i>
                </div>
                <div className="card-content">
                    <Link to={'/product/' + product.id} key={product.id}>
                        <span className="card-title grey-text darken-2"><strong>{product.name}</strong></span>
                    </Link>
                    <h6 className="grey-text">{product.price}원</h6>
                </div>
            </div>
        </div>
    )
}


export default ProductButton