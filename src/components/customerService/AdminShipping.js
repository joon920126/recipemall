import React, {Component} from 'react'
import ShippingSummary from './ShippingSummary'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Link} from 'react-router-dom'
import ShippingSearch from '../layout/ShippingSearch'


class AdminShipping extends Component {
    handleClick = (e) => {
      e.preventDefault()
      this.props.history.push('/adminshippingdetail/'+e.currentTarget.id)
    }

    render() {
      const {page, shipping} = this.props
      const keyword = this.props.location.state? this.props.location.state.keyword : ''
      const filter = this.props.location.state? this.props.location.state.filter : 'all'
      const searched = filter === 'shipId'? shipping&& shipping.slice().filter((order) => order.id.includes(keyword)) :
                         filter === 'name'? shipping&& shipping.slice().filter((order) => order.name.includes(keyword)) :
                         filter === 'phone'? shipping&& shipping.slice().filter((order) => order.phone.includes(keyword)) :
                         filter === 'all'? shipping&& shipping.slice().filter((order) => order.id.includes(keyword) || order.name.includes(keyword) || order.phone.includes(keyword)) : null
      const rows = searched && searched.sort((a, b) => b.id-a.id).map((shipping) => <ShippingSummary
        customClickEvent={this.handleClick}
        key={shipping.id}
        name={shipping.name}
        phone={shipping.phone}
        orderedAt={shipping.orderedAt}
        deliver={shipping.deliver}
        shipId={shipping.id}
      />)

      return (
        <div className='container Site-content'>
          <h5>주문관리</h5>
          <table className='highlight'>
            <thead>
              <tr>
                <th className='center'>주문번호</th>
                <th className='center'>이름</th>
                <th className='center'>연락처</th>
                <th className='center'>주문일자</th>
                <th className='center'>진행상황</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
          <div className='row'>
            <ul className='pagination center'>
              {page>1?<li className='waves-effect'><Link to={'/adminshipping/'+(page-1)}><i className='material-icons'>chevron_left</i></Link></li>:null}
              {rows&& Object.keys(Array.apply(0, Array(Math.ceil(rows.length/20))))
                  .map((idx) => <li className='waves-effect' key={idx}>
                    <Link to={'/adminshipping/'+(parseInt(idx)+1)}>
                      {parseInt(idx)+1}
                    </Link>
                  </li>)}
              {rows&&page<Math.ceil(rows.length/20)? <li className='waves-effect'><Link to={'/adminshipping/'+(page+1)}><i className='material-icons'>chevron_right</i></Link></li> : null}
            </ul>
          </div>
          <ShippingSearch/>
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    page: parseInt(ownProps.match.params.page),
    shipping: state.firestore.ordered.shipping,
  }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'shipping'}]),
)(AdminShipping)
