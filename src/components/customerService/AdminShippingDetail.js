import React, {Component} from 'react'
import ShippingSummary from './ShippingSummary'
import {firestoreConnect, getFirebase} from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {changeDeliver} from '../../store/actions/cartActions'

class AdminShippingDetail extends Component {
    state = {
      deliver: null,
    }

    componentDidUpdate = () => {
      window.scrollTo(0, 0)
      const deliver = this.props.shipping&& this.props.shipping.find((order) => order.id === this.props.id).deliver
      switch (deliver) {
        case 0: {
          document.getElementById('0').setAttribute('checked', true)
          return
        }
        case 1: {
          document.getElementById('1').setAttribute('checked', true)
          return
        }
        case 2: {
          document.getElementById('2').setAttribute('checked', true)
        }
      }
    }

    handleChange = (e) => {
      this.props.changeDeliver(this.props.id, parseInt(e.target.id))
    }

    render() {
      const id = this.props.id
      const product = this.props.recipeAndProduct
      const shipping = this.props.shipping&& this.props.shipping.find((order) => order.id === id)
      return (
        <div className='container Site-content'>
          <h5>배송조회</h5>
          <table>
            <thead>
              <tr>
                <th className='center'>주문번호</th>
                <th className='center'>받는사람</th>
                <th className='center'>연락처</th>
                <th className='center'>주문일자</th>
                <th className='center'>진행상황</th>
              </tr>
            </thead>
            <tbody>
              {shipping&&<ShippingSummary
                key={shipping.id}
                name={shipping.name}
                phone={shipping.phone}
                orderedAt={shipping.orderedAt}
                shipId={shipping.id}
                deliver={shipping.deliver}
              />}
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th className='center'>이미지</th>
                <th className='center'>상품번호</th>
                <th className='center'>상품정보</th>
                <th className='center'>수량</th>
              </tr>
            </thead>
            <tbody>
              {shipping&&product? shipping.cart.map((item) => <tr key={item.id}>
                <td style={{width: '15%'}} className='center'><img className='responsive-img materialboxed' src={product.find((item1) => item1.id===item.id).img}/></td>
                <td style={{width: '35%'}} className='center'>{item.id}</td>
                <td style={{width: '40%'}} className='center'>{product.find((item1) => item1.id===item.id).name}</td>
                <td style={{width: '10%'}} className='center'>{item.qty}개</td>
              </tr>,
              ): null}
              {shipping&&<tr>
                <td className='center' colSpan='4'>배송지: ({shipping.zonecode}) {shipping.address} {shipping.address2}</td>
              </tr>}
              {shipping&& <tr>
                <td className='center' colSpan='2'>배송메시지: {shipping.message}</td>
                <td className='center' colSpan='2'>
                  <form onChange={this.handleChange}>
                    <label style={{marginRight: '8px'}}>
                      <input className='with-gap' name='delivered' type='radio' id='0'/><span>배송준비중</span>
                    </label>
                    <label style={{marginRight: '8px'}}>
                      <input className='with-gap' name='delivered' type='radio' id='1'/><span>배송중</span>
                    </label>
                    <label>
                      <input className='with-gap' name='delivered' type='radio' id='2'/><span>배송완료</span>
                    </label>
                  </form>
                </td>
              </tr>
              }
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
)(AdminShippingDetail)
