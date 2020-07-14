import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import ProductSummary from './ProductSummary'
import {firestoreConnect, getFirebase} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class Cart extends Component {
    render() {
        if (!this.props.auth.uid) return <Redirect to='/'/>
        const firebase = getFirebase()
        const product = (this.props.product||[]).filter((item)=>item.type==='product')
        const user = (this.props.user||[]).find((user)=>user.id===firebase.auth().currentUser.uid)
        const testPrice= user&& user.cart.map((item1) => product.find((product)=>product.id===item1.id).price*item1.qty)
        const testPrice2 = testPrice? testPrice : []
        const total = testPrice2? testPrice2.reduce(((a, b)=>a+b), 0) : undefined
        const row = user? user.cart.map((item)=> <ProductSummary
            cart={item}
            product={product.find((product) => product.id === item.id)}
            key={item.id}/>) : []
        if (row.length>0) {
            return (
                <div className='container Site-content'>
                    <h5>장바구니</h5>
                    <table>
                        <thead>
                            <tr>
                                <th className='center'>이미지</th>
                                <th className='center'>상품정보</th>
                                <th className='center'>가격</th>
                                <th className='center'>수량</th>
                                <th className='center'>총합</th>
                            </tr>
                        </thead>
                        <tbody>
                            {row}
                        </tbody>
                    </table>
                    <div className='center flow-text'>
                    총 {total}원
                        <Link style={{margin: '8px'}} className='btn brown' to='/Order'>주문하기</Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='container Site-content'>
                    <h5>장바구니</h5>
                    <span>장바구니에 담긴 상품이 없습니다.</span>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.firestore.ordered.recipeAndProduct,
        user: state.firestore.ordered.users,
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{collection: 'users'}]),
    firestoreConnect([{collection: 'recipeAndProduct'}]),
)(Cart)
