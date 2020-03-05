import React, { Component } from 'react'
import ShippingSummary from './ShippingSummary'

class AdminShipping extends Component {

    handleClick = (e) => {
        e.preventDefault()
        this.props.history.push('/shippingdetail/1')
    }

    render() {
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
                        <ShippingSummary customClickEvent={this.handleClick}/>
                        <ShippingSummary customClickEvent={this.handleClick}/>
                        <ShippingSummary customClickEvent={this.handleClick}/>
                        <ShippingSummary customClickEvent={this.handleClick}/>
                        <ShippingSummary customClickEvent={this.handleClick}/>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AdminShipping