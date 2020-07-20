import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class OrderCompleted extends Component {
    render() {
        if (!this.props.auth.uid) return <Redirect to='/'/>
        if (!this.props.location.state) return <Redirect to='/'/>
        return (
            <div className='container Site-content'>
                <div className='row'>
                    <div className='col s8 l8 offset-l2 center'>
                        <h5>회원가입이 완료되셨습니다.</h5>
                        <Link to='/' className='btn'>메인페이지로 이동</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(OrderCompleted)
