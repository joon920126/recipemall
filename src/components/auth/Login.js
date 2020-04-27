import React, {Component} from 'react'
import {connect} from 'react-redux'
import {logIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'

class Login extends Component {
    state = {
      email: '',
      password: '',
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      this.props.logIn(this.state)
    }

    render() {
      const {auth, authError} = this.props
      if (auth.uid) return <Redirect to='/'/>
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
            <div className="red-text center">
              {authError? <p>{authError}</p>:null}
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
    logIn: (creds) => dispatch(logIn(creds)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
