import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect, getFirebase} from 'react-redux-firebase'

class Profile extends Component {

    state = {
        password: '',
        name: '',
        address: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
    }

    render() {
        const auth = this.props.auth
        const users = this.props.users
        const user = users&&users.find(user => user.id===auth.uid)
        // console.log(user)
        return (
            <div className="container Site-content">
                <h5 className="grey-text">회원정보 확인 및 수정</h5>
                <div className="input-field">
                    <label className="active" htmlFor="name">이름</label>
                    <input className='validate' placeholder="박준희" type="text" id="name" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label className="active" htmlFor="password">비밀번호</label>
                    <input className='validate' placeholder="새로운 비밀번호를 입력하세요" type="password" id="password" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label className="active" htmlFor="address">배송지</label>
                    <input className='validate' placeholder={"서울시 어딘가"} type="text" id="address" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label className="active" htmlFor="phone">연락처</label>
                    <input className='validate' placeholder={"010-1234-1234"} type="text" id="phone" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn brown lighten-2">회원정보 수정</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        users: state.firestore.ordered.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return 
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{collection:'users'}])
)(Profile)
 