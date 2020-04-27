import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import MyPageButton from './MyPageButton'

class MyPage extends Component {
  render() {
    if (!this.props.auth.uid) return <Redirect to='/'/>
    return (
      <div className="container Site-content">
        <h5>마이페이지</h5>

        <div className="row">
          <MyPageButton
            image='https://image.freepik.com/free-icon/1_318-10653.jpg'
            linkTo='/cart'
            name='CART'
            description='장바구니 조회'/>
          <MyPageButton
            image='https://static.thenounproject.com/png/101952-200.png'
            linkTo='/shipping'
            name='ORDER'
            description='주문배송 조회'/>
          <MyPageButton
            image='https://icons-for-free.com/iconfiles/png/512/friend+human+man+member+person+profile+user+users+icon-1320168707291252637.png'
            linkTo='/profile'
            name='PROFILE'
            description='회원정보 수정'/>
          <MyPageButton
            image='https://static.thenounproject.com/png/19653-200.png'
            linkTo='/favorite/1'
            name='RECIPE'
            description='레시피 즐겨찾기'/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(MyPage)
