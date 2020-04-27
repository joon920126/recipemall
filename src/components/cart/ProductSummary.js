import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeOneFromCart, removeFromCart, addToCart} from '../../store/actions/cartActions'


class ProductSummary extends Component {
    plus = () => {
      if (this.props.cart.qty<this.props.product.stock) {
        this.props.addToCart(this.props.product, 1)
      } else {
        alert('현재 보유중인 재고가 '+this.props.product.stock+'개입니다.')
      }
    }

    minus = () => {
      if (this.props.cart.qty>1) {
        this.props.removeOneFromCart(this.props.product)
      } else {
        alert('최소 구매수량은 1개입니다.')
      }
    }

    remove = () => {
      this.props.removeFromCart(this.props.product)
    }

    render() {
      const product=this.props.product
      const cart = this.props.cart
      return (
        <tr>
          <td className='center' style={{width: '15%'}}>
            <Link to={'/product/'+product.id}>
              <img src={product.img} alt='' className='responsive-img'/>
            </Link>
          </td>
          <td className='center'>
            <Link to={'product/'+product.id}>
              <h6 className='black-text'>{product.name}</h6>
            </Link>
          </td>
          <td className='center'><h6>{product.price}원</h6></td>
          <td className='center'>
            <h6 style={{marginBottom: '12px'}}>{cart.qty}개</h6>
            <button className='btn-small white black-text' type='button' onClick={this.plus}><i className='material-icons'>add</i></button>
            <button className='btn-small white black-text' type='button' onClick={this.minus}><i className='material-icons'>remove</i></button>
            <button className='btn-small white black-text' type='button' onClick={this.remove}><i className='material-icons'>delete</i></button>
          </td>
          <td className='center'><h6>{product.price*cart.qty}원</h6></td>
        </tr>
      )
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product, quantity) => {
      dispatch(addToCart(product, quantity))
    },
    removeOneFromCart: (product) => {
      dispatch(removeOneFromCart(product))
    },
    removeFromCart: (product) => {
      dispatch(removeFromCart(product))
    },
  }
}

export default connect(null, mapDispatchToProps)(ProductSummary)
