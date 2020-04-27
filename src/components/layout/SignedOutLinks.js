import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/Login'>로그인</NavLink></li>
        <li><NavLink to='/Join'>회원가입</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks
