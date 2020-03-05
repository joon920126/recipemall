import React, { Component } from 'react'

class ShippingSummary extends Component {

    render() {
            return (
                <tr onClick={this.props.customClickEvent}>
                    <td className='center'>1234567890</td>
                    <td className='center'>test1@asdf.com</td>
                    <td className='center'>김낑깡</td>
                    <td className='center'>01012341234</td>
                    <td className='center'>서울시 은평구 증산로 12 101호</td>
                    <td className='center'>배송준비중</td>
                </tr>
            )
        }
    }

export default ShippingSummary