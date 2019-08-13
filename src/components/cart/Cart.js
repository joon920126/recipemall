import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import ProductSummary from './ProductSummary'

class Cart extends Component {
    render(){
        const {product} = this.props.product
        const {cart} = this.props.cart
        let total = 0

        return (
            <div className="container">
                <h5>장바구니</h5>
                <table>
                    <thead>
                        <tr>
                            <th className="center">이미지</th>
                            <th className="center">상품정보</th>
                            <th className="center">가격</th>
                            <th className="center">수량</th>
                            <th className="center">총합</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart? (
                                cart.map(cart => {
                                    let prod = product.find(product => product.id === cart.id)
                                    total+=prod.price*cart.qty
                                    return <ProductSummary cart={cart} product={prod} key={cart.id}/>
                                })
                            ) : (
                                <h6>장바구니에 저장된 품목이 없습니다.</h6>
                            )
                        }
                    </tbody>
                </table>
                <div className="center">
                    {total}원
                    <Link style={{margin:"8px"}} className="btn brown" to='/Order'>Order</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart)