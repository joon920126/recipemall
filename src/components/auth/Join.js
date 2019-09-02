import React, { Component } from 'react'

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
        console.log(this.state) 
    }

    render(){
        return (
            <div className="container Site-content">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5>회원가입</h5>
                    <div className="input-field">
                        <label htmlFor="email">이메일123123</label>
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
                    </div>
                </form>
            </div>
        )
    }
}

export default Join