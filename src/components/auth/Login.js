import React, { Component } from 'react'

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.email, this.state.password)
    }

    render(){
        return (
            <div className="container Site-content">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">로그인</h5>
                    <div className="input-field">
                        <i className="fas fa-envelope prefix"></i>
                        <label htmlFor="email">이메일</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <i className="fas fa-unlock-alt prefix"></i>
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn brown lighten-2">로그인</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login