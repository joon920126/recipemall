import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from "react-redux";
import { signUp } from '../../store/actions/authActions'

class Join extends Component {

    state = {
        email: '',
        password: '',
        name: '',
        address: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state) 
    }

    render(){
        const {auth, authError} = this.props
        if(auth.uid) return <Redirect to='/'/>
        return (
            <div className="container Site-content">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5>회원가입</h5>
                    <div className="input-field">
                        <label htmlFor="email">이메일</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="name">이름</label>
                        <input type="text" id="name" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="address">배송지</label>
                        <input type="text" id="address" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="phone">연락처</label>
                        <input type="text" id="phone" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn brown lighten-2">회원가입</button>
                        <div className="red-text center">
                            {authError? <p>{authError}</p>: null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Join)