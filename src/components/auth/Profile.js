import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect, getFirebase} from 'react-redux-firebase'

class Profile extends Component {

    state = {
        password: '',
        passwordConfirm: '',
        passwordError: false,
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
        if(this.state.password === this.state.passwordConfirm){
            this.setState({passwordError:false})
            console.log("submit complete", this.state);
        } else {
            this.setState({passwordError: true})
        }
    }

    render() {
        const auth = this.props.auth
        const users = this.props.users
        const user = users&&users.find(user => user.id===auth.uid)
        return (
            <div className="container Site-content">
                <h5 className="grey-text">회원정보 확인 및 수정</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label className="active" htmlFor="name">이름</label>
                        <input className='validate' placeholder={user? user.name:''} type="text" id="name" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label className="active" htmlFor="password">비밀번호</label>
                        <input className='validate' placeholder="비밀번호 변경을 원할 시 새로운 비밀번호를 입력하세요" type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label className="active" htmlFor="passwordConfirm">비밀번호 확인</label>
                        <input className='validate' placeholder="비밀번호를 다시 입력해주세요" type="password" id="passwordConfirm" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label className="active" htmlFor="address">배송지</label>
                        <input className='validate' placeholder={user? user.address:''} type="text" id="address" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label className="active" htmlFor="phone">연락처</label>
                        <input className='validate' placeholder={user? user.phone:''} type="text" id="phone" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn brown lighten-2">회원정보 수정</button>
                        <div className="red-text center">
                            {this.state.passwordError? <p>비밀번호를 다시 입력해주세요</p> : null}
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
 