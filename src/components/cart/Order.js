import React, {Component} from 'react'
import { connect } from 'react-redux'
import { firestoreConnect, getFirebase } from 'react-redux-firebase'
import { compose } from 'redux'
import { order } from '../../store/actions/cartActions'
import Postcode from '../layout/Postcode'

class Order extends Component {

    state = {
        cart: [],
        name: '',
        address: '',
        phone: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleOrder = (e) => {
        e.preventDefault()
        return new Promise(function(resolve, reject){
            resolve()
        }).then(() => {
            this.setState({
                cart: this.props.user.filter(user => user.id === getFirebase().auth().currentUser.uid)[0].cart
            })
        }).then(() => {
            this.props.order(this.state)
        })
        
    }

    render(){
        const firebase = getFirebase()
        const user = (this.props.user||[]).filter((user) => user.id===firebase.auth().currentUser.uid)[0]
        const cart = user && user.cart
        const productList = (this.props.product||[]).filter(item => item.type==='product')
        const row = cart&&cart.map(item => {
            const product = productList.filter(product=>product.id===item.id)[0]
            return (
                <tr key={item.id}>
                    <td className="center" style={{width:'15%'}}>
                        <img src={product.img} alt="" className="responsive-img"/>
                    </td>
                    <td className="center">
                        <h6 className="black-text">{product.name}</h6>
                    </td>
                    <td className="center">
                        <h6>{product.price}원</h6>
                    </td>
                    <td className="center">
                        <h6>{item.qty}개</h6>
                    </td>
                    <td className="center">
                        <h6>{product.price*item.qty}원</h6>
                    </td>
                </tr>
            )
        })
        return (
            <div className="container Site-content">
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
                <div className="row">
                    <div className="col s6 l6">
                        <div className="row">
                            <div className="col s4 l4">
                                <h5 className="grey-text text-darken-2">배송지 정보</h5>
                            </div>
                            <div className="col s8 l8">
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span>주문자 정보와 동일</span>
                                    </label>
                                </p>
                            </div>
                        </div>
                        <div className="input-field">
                            <label htmlFor="name">이름</label>
                            <input type="text" id="name" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="address">배송지</label>
                            <input type="text" id="address" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="phone">연락처</label>
                            <input type="text" id="phone" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="phone">배송메시지</label>
                            <input type="text" id="message" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="col s6 l6">
                        {/* <Postcode/> */}
                    </div>
                </div>
                <div className="flow-text center" style={{marginTop:'16px'}}>주문하시겠습니까?
                    <button style={{marginLeft:'12px'}} className="btn brown lighten-2" onClick={this.handleOrder}>주문</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product : state.firestore.ordered.recipeAndProduct,
        user: state.firestore.ordered.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        order: (cart) => dispatch(order(cart))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{collection:'recipeAndProduct'}]),
    firestoreConnect([{collection:'users'}])
)(Order)