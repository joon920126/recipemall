import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect, getFirebase} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect, Link} from 'react-router-dom'
import moment from 'moment'

class Shipping extends Component {
    handleClick = (e) => {
        e.preventDefault()
        this.props.history.push('/shippingdetail/'+e.currentTarget.id)
    }

    render() {
        if (!this.props.auth.uid) return <Redirect to='/'/>
        const {page, shipping} = this.props
        const rows = shipping&& shipping.filter((order) => order.userid===this.props.auth.uid).sort((a, b) => b.id-a.id)
            .map((shipping) =>
                <tr onClick={this.handleClick} key={shipping.id} id={shipping.id}>
                    <td className='center'>{shipping.id}</td>
                    <td className='center'>{moment(shipping.orderedAt).format('YYYY-MM-DD')}</td>
                    <td className='center'>{shipping.deliver===0? '배송준비중' :
                        shipping.deliver===1? '배송중' :
                            '배송완료'}
                    </td>
                </tr>)

        return (
            <div className='container Site-content'>
                <h5>배송조회</h5>
                <table className='highlight'>
                    <thead>
                        <tr>
                            <th className='center'>주문번호</th>
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
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        page: parseInt(ownProps.match.params.page),
        shipping: state.firestore.ordered.shipping,
        auth: state.firebase.auth,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'shipping'}]),
)(Shipping)
