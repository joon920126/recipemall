import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ShippingSummary from './ShippingSummary'

class ShippingDetail extends Component {
    render() {

        const row = (
            <tr>
                <td className='center'>(이미지)</td>
                <td className='center'>데체코 스파게티</td>
                <td className='center'>3개</td>
            </tr>
            )
        return (
            <div className="container Site-content">
                <h5>배송조회</h5>
                <table>
                    <thead>
                        <tr>
                            <th className="center">주문번호</th>
                            <th className='center'>아이디</th>
                            <th className='center'>이름</th>
                            <th className='center'>연락처</th>
                            <th className='center'>주소</th>
                            <th className='center'>배송여부</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ShippingSummary/>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th className="center">이미지</th>
                            <th className="center">상품정보</th>
                            <th className="center">수량</th>
                        </tr>
                    </thead>
                    <tbody>
                        {row}
                        {row}
                        {row}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ShippingDetail