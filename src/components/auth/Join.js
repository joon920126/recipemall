import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'
import DaumPostcode from 'react-daum-postcode'

class Join extends Component {
    state = {
      email: '',
      password: '',
      passwordConfirm: '',
      passwordError: false,
      name: '',
      address: '',
      address2: '',
      phone: '',
      zonecode: '',
      addressApi: false,
    }

    handleOpenPostCode(e) {
      e.preventDefault()
      this.setState({addressApi: true})
    }

    handleAddress(data) {
      let fullAddress = data.address
      let extraAddress = ''

      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname
        }
        if (data.buildingName !== '') {
          extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName)
        }
        fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '')
      }
      this.setState({
        zonecode: data.zonecode,
        address: fullAddress,
        addressApi: false,
      })
      document.getElementById('address').value = fullAddress
      document.getElementById('zonecode').value = data.zonecode
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      if (this.state.password === this.state.passwordConfirm) {
        this.props.signUp(this.state)
        this.setState({passwordError: false})
      } else {
        this.setState({passwordError: true})
      }
    }

    render() {
      const {auth, authError} = this.props
      if (auth.uid) return <Redirect to='/'/>
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
              <label htmlFor="passwordConfirm">비밀번호 확인</label>
              <input className='validate' type="password" id="passwordConfirm" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="name">이름</label>
              <input type="text" id="name" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="zonecode" className={this.state.zonecode? 'active':null}>우편번호</label>
              <input type="text" disabled onChange={this.handleChange} id="zonecode"/>
              {this.state.addressApi? <DaumPostcode onComplete={this.handleAddress}/> :
                                                <button className="btn brown lighten-2" onClick={this.handleOpenPostCode}>우편번호 찾기</button>}
            </div>
            <div className="input-field">
              <label className={this.state.address? 'active' : null} htmlFor="address">배송지</label>
              <input disabled type="text" id="address" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="address2">상세주소</label>
              <input type="text" onChange={this.handleChange} id="address2"/>
            </div>
            <div className="input-field">
              <label htmlFor="phone">연락처</label>
              <input type="text" id="phone" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="btn brown lighten-2">회원가입</button>
              <div className="red-text center">
                {authError? <p>{authError}</p>: null}
                {this.state.passwordError? <p>비밀번호를 다시 입력해주세요</p>:null}
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
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Join)
