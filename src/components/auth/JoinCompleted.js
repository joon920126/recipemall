import React from 'react'
import {Link} from 'react-router-dom'

const JoinCompleted = () => {
  return (
    <div className='container Site-content'>
      <div className='row'>
        <div className='col s8 l8 offset-l2 center'>
          <h5>회원가입이 완료되셨습니다.</h5>
          <Link to='/login' className='btn'>로그인 페이지로 이동</Link>
        </div>
      </div>
    </div>
  )
}

export default JoinCompleted
