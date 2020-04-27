import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addToCart} from '../../store/actions/cartActions'

const ProductButton = ({product, dispatch, isAdmin}) => {
  const handleClick = () => {
    alert('장바구니에 추가되었습니다.')
    dispatch(addToCart(product, 1))
  }

  return (
    <div className="col s6 l3">
      <div className="card hoverable">
        <div className="card-image">
          <Link to={'/product/' + product.id} key={product.id}><img src={product.img} alt=""/></Link>
          {isAdmin? null : <i className="fas fa-shopping-cart halfway-fab btn-floating center pink lighten-4" onClick={handleClick}></i>}
        </div>
        <div className="card-content product-button">
          <div>
            <Link to={'/product/' + product.id} key={product.id}>
              <span className="grey-text text-darken-3"><strong>{product.name}</strong></span>
            </Link>
          </div>
          <h6 className="card-title grey-text text-darken-1">{product.price}원</h6>
        </div>
      </div>
    </div>
  )
}


export default connect()(ProductButton)
