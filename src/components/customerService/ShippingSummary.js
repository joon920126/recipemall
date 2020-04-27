import React, {Component} from 'react'
import moment from 'moment'

class ShippingSummary extends Component {
  render() {
    const {customClickEvent, shipId, name, phone, orderedAt, deliver} = this.props
    return (
      <tr onClick={customClickEvent} id={shipId}>
        <td className='center'>{shipId}</td>
        <td className='center'>{name}</td>
        <td className='center'>{phone}</td>
        <td className='center'>{moment(orderedAt).format('YYYY-MM-DD')}</td>
        <td className='center'>{deliver===0? '배송준비중' :
                                                        deliver===1? '배송중' :
                                                                     '배송완료'}
        </td>
      </tr>
    )
  }
}

export default ShippingSummary
