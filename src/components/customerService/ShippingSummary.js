import React, { Component } from 'react'

class ShippingSummary extends Component {

    render() {
        const { customClickEvent, shipId, name, phone, orderedAt, deliver} = this.props
            return (
                <tr onClick={customClickEvent} id={shipId}>
                    <td className='center'>{shipId}</td>
                    <td className='center'>{name}</td>
                    <td className='center'>{phone}</td>
                    <td className='center'>{orderedAt}</td>
                    <td className='center'>{deliver===0? "배송준비중" 
                                                        : deliver===1? "배송중"
                                                                     : "배송완료"}
                    </td>
                </tr>
            )
        }
    }

export default ShippingSummary