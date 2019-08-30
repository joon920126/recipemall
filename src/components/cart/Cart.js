import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import ProductSummary from './ProductSummary'

class Cart extends Component {
    render(){
        const {product} = this.props.product
        const {cart} = this.props.cart

        const total = cart.map(item => 
                                product.find(product=>product.id===item.id).price 
                                * item.qty)
                          .reduce((a,b)=>a+b)

        const row = cart.map((item) => <ProductSummary 
                                            cart={item} 
                                            product={product.find(product => product.id === item.id)} 
                                            key={item.id}/>)
        if(row){
            return (
                <div className="container Site-content">
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
                        {row}
                    </tbody>
                </table>
                <div className="center flow-text">
                    총 {total}원 
                    <Link style={{margin:"8px"}} className="btn brown" to='/Order'>Order</Link>
                </div>
            </div>
        )
    } else {
        return(
            <div className="container Site-content">
                <h5>장바구니</h5>
                <span className="center">장바구니에 담긴 상품이 없습니다.</span>
            </div>
        )
    }
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)