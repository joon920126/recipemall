import React, {Component} from 'react'
import { connect } from 'react-redux'
import { firestoreConnect, getFirebase } from 'react-redux-firebase'
import { compose } from 'redux'
import { order } from '../../store/actions/cartActions'
import DaumPostcode from 'react-daum-postcode';

class Order extends Component {

    state = {
        cart: [],
        name: '',
        zonecode: '',
        address: '',
        address2: '',
        phone: '',
        message: '',
        addressApi: false
    }

    handleAddress = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        this.setState({
            zonecode: data.zonecode,
            address: fullAddress,
            addressApi: false
        })
        document.getElementById('address').value = fullAddress
        document.getElementById('zonecode').value = data.zonecode
      }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleCheck = (e) => {
        const firebase = getFirebase()
        const user = (this.props.user||[]).find((user) => user.id===firebase.auth().currentUser.uid)
        if(e.target.checked) {
            document.getElementById('name').value = user.name
            document.getElementById('address').value = user.address
            document.getElementById('phone').value = user.phone
            this.setState({
                name: user.name,
                address: user.address,
                phone: user.phone
            })
        }else{
            document.getElementById('name').value = ''
            document.getElementById('address').value = ''
            document.getElementById('phone').value = ''
            this.setState({
                name: '',
                address: '',
                phone: ''
            })
        }
    }

    handleOrder = (e) => {
        e.preventDefault()
        return new Promise(function(resolve, reject){
            resolve()
        }).then(() => {
            this.setState({
                cart: this.props.user.find(user => user.id === getFirebase().auth().currentUser.uid).cart
            })
        }).then(() => {
            this.props.order(this.state)
        })
    }

    handleOpenPostCode = (e) => {
        e.preventDefault()
        this.setState({addressApi:true})
    }

    render(){
        const firebase = getFirebase()
        const user = (this.props.user||[]).find((user) => user.id===firebase.auth().currentUser.uid)
        const cart = user && user.cart
        const productList = (this.props.product||[]).filter(item => item.type==='product')
        const row = cart&&cart.map(item => {
            const product = productList.find(product=>product.id===item.id)
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
                        <div className="row" style={{marginBottom:'0px'}}>
                            <div className="col s4 l4">
                                <h5 className="grey-text text-darken-2">배송지 정보</h5>
                            </div>
                            <div className="col s8 l8">
                                <p>
                                    <label>
                                        <input type="checkbox" onClick={this.handleCheck}/>
                                        <span>주문자 정보와 동일</span>
                                    </label>
                                    
                                    <button style={{marginLeft:'16px'}} className="btn brown lighten-2" onClick={this.handleOpenPostCode}>우편번호 찾기</button>
                                </p>
                            </div>
                        </div>
                        <div className="row" style={{marginBottom:'0px'}}>
                            <div className="input-field col s6 l6" style={{marginTop:'0px'}}>
                                <label className={this.state.name? 'active' : null} htmlFor="name" name="autofill">이름</label>
                                <input type="text" id="name" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field col s6 l6" style={{marginTop:'0px'}}>
                                <label className={this.state.zonecode? 'active' : null} htmlFor="zonecode" name="autofill">우편번호</label>
                                <input disabled type="text" id="zonecode" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="input-field" style = {{marginTop:'0px'}}>
                            <label className={this.state.address? 'active' : null} htmlFor="address" name="autofill">배송지</label>
                            <input disabled type="text" id="address" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label className={this.state.address2? 'active' : null} htmlFor="address2" name="autofill">상세주소</label>
                            <input type="text" id="address2" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label className={this.state.phone? 'active' : null} htmlFor="phone" name="autofill">연락처</label>
                            <input type="text" id="phone" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="phone">배송메시지</label>
                            <input type="text" id="message" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="col s6 l6">
                        {this.state.addressApi === true? <DaumPostcode onComplete={this.handleAddress}/> : null}
                    </div>
                </div>
                <div className="flow-text center" style={{marginTop:'16px', marginBottom:'16px'}}>주문하시겠습니까?
                    <button style={{marginLeft:'12px'}} className="btn brown lighten-2" onClick={this.handleOrder}>주문</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product : state.firestore.ordered.recipeAndProduct,
        user: state.firestore.ordered.users,
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