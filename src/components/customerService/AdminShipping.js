import React, { Component } from 'react'
import ShippingSummary from './ShippingSummary'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class AdminShipping extends Component {

    handleClick = (e) => {
        e.preventDefault()
        this.props.history.push('/shippingdetail/1')
    }

    render() {
        const {page, shipping} = this.props
        const test = shipping&& shipping.map(shipping => shipping.id)
        console.log(test)
        const rows = shipping&& shipping.map(shipping => <ShippingSummary customClickEvent={this.handleclick}/>)

        return (
            <div className="container Site-content">
                <h5>주문관리</h5>
                <table className="highlight">
                    <thead>
                        <tr>
                            <th className="center">주문번호</th>
                            <th className='center'>아이디</th>
                            <th className='center'>이름</th>
                            <th className='center'>연락처</th>
                            <th className='center'>주소</th>
                            <th className='center'>진행상황</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        page: parseInt(ownProps.match.params.page),
        shipping: state.firestore.ordered.shipping
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'shipping'}])
)(AdminShipping)