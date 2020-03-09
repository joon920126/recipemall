import React, { Component } from 'react'
import {connect} from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux'
import ShippingSummary from '../customerService/ShippingSummary'

class MemberDetail extends Component {

    componentDidMount(){
        window.scrollTo(0,0)
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.history.push('/adminshippingdetail/'+e.currentTarget.id)
    }

    render() {
        const userList = this.props.users
        const {shipping,id} = this.props
        const user = userList? userList.find(user => user.id === id) : {}
        const rows = shipping&& shipping.filter(order=> order.userid===id)
                        .map(shipping => <ShippingSummary 
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
                <h5>회원정보</h5>
                <table>
                    <tbody>
                        <tr>
                            <td>이메일</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>이름</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>배송주소(+우편번호)</td>
                            <td>({user.zonecode}) {user.address}</td>
                        </tr>
                        <tr>
                            <td>상세주소</td>
                            <td>{user.address2}</td>
                        </tr>
                        <tr>
                            <td>연락처</td>
                            <td>{user.phone}</td>
                        </tr>
                    </tbody>
                </table>
                <h5>주문내역</h5>
                <table>
                    <thead>
                        <tr>
                            <th className="center">주문번호</th>
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
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.firestore.ordered.users,
        id: ownProps.match.params.id,
        shipping: state.firestore.ordered.shipping
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection:'users'}]),
    firestoreConnect([{collection:'shipping'}])
)(MemberDetail)