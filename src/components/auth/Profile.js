import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect, getFirebase} from 'react-redux-firebase'
import { change } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import DaumPostcode from 'react-daum-postcode'

class Profile extends Component {

    state = {
        password: '',
        passwordConfirm: '',
        passwordError: false,
        name: '',
        address: '',
        address2: '',
        zonecode: '',
        addressApi: false,
        phone: ''
    }

    handleOpenPostCode = (e) => {
        e.preventDefault()
        this.setState({addressApi:true})
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
            this.props.change(this.state)
        } else {
            this.setState({passwordError: true})
        }
    }

    handleAddress = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        this.setState({
            zonecode: data.zonecode,
            address: fullAddress,
            addressApi: false
        })
        document.getElementById('address').value = fullAddress
        document.getElementById('zonecode').value = data.zonecode
      }

    render() {
        const auth = this.props.auth
        const users = this.props.users
        const user = users&&users.find(user => user.id===auth.uid)
        if(!this.props.auth.uid) return <Redirect to='/'/>
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
                        <label className="active" htmlFor="zonecode">우편번호</label>
                        <input disabled className='validate' placeholder={user? user.zonecode:''} type="text" id="zonecode" onChange={this.handleChange}/>
                        {this.state.addressApi? <DaumPostcode onComplete={this.handleAddress}/> : 
                                                <button className="btn brown lighten-2" onClick={this.handleOpenPostCode}>우편번호 찾기</button>}
                    </div>
                    <div className="input-field">
                        <label className="active" htmlFor="address">배송지</label>
                        <input disabled className='validate' placeholder={user? user.address:''} type="text" id="address" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label className="active" htmlFor="address2">상세주소</label>
                        <input className='validate' placeholder={user? user.address2:''} type="text" id="address2" onChange={this.handleChange}/>
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
        users: state.firestore.ordered.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        change: (user) => dispatch(change(user))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{collection:'users'}])
)(Profile)
 