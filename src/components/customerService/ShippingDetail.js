import React, {Component} from 'react'
import {firestoreConnect, getFirebase} from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {changeDeliver} from '../../store/actions/cartActions'
import moment from 'moment'

class ShippingDetail extends Component {
    state = {

    }

    render() {
      const id = this.props.id
      const product = this.props.recipeAndProduct
      const shipping = this.props.shipping&& this.props.shipping.find((order) => order.id === id)
      return (
        <div className="container Site-content">
          <h5>배송조회</h5>
          <table>
            <thead>
              <tr>
                <th className="center">주문번호</th>
                <th className="center">받는사람</th>
                <th className="center">연락처</th>
                <th className='center'>주문일자</th>
                <th className='center'>진행상황</th>
              </tr>
            </thead>
            <tbody>
              {shipping&&<tr onClick={this.handleClick} key={shipping.id} id={shipping.id}>
                <td className='center'>{shipping.id}</td>
                <td className='center'>{shipping.name}</td>
                <td className='center'>{shipping.phone}</td>
                <td className='center'>{moment(shipping.orderedAt).format('YYYY-MM-DD')}</td>
                <td className='center'>{shipping.deliver===0? '배송준비중' :
                                                                    shipping.deliver===1? '배송중' :
                                                                                '배송완료'}
                </td>
              </tr>}
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th className="center">이미지</th>
                <th className="center">상품번호</th>
                <th className="center">상품정보</th>
                <th className="center">수량</th>
              </tr>
            </thead>
            <tbody>
              {shipping&&product? shipping.cart.map((item) => <tr key={item.id}>
                <td style={{width: '15%'}} className="center"><img className='responsive-img materialboxed' src={product.find((item1) => item1.id===item.id).img}/></td>
                <td style={{width: '35%'}} className="center">{item.id}</td>
                <td style={{width: '40%'}} className="center">{product.find((item1) => item1.id===item.id).name}</td>
                <td style={{width: '10%'}} className="center">{item.qty}개</td>
              </tr>,
              ): null}
              {shipping&&<tr>
                <td className="center" colSpan="2">배송지: ({shipping.zonecode}) {shipping.address} {shipping.address2}</td>
                <td className="center" colSpan="2">배송메시지: {shipping.message}</td>
              </tr>}
            </tbody>
          </table>
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    shipping: state.firestore.ordered.shipping,
    recipeAndProduct: state.firestore.ordered.recipeAndProduct,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDeliver: (order, delivered) => dispatch(changeDeliver(order, delivered)),
  }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{collection: 'shipping'}]),
    firestoreConnect([{collection: 'recipeAndProduct'}]),
)(ShippingDetail)
