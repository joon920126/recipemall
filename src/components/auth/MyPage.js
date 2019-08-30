import React, { Component } from 'react'
import MyPageButton from './MyPageButton'

class MyPage extends Component {

    render() {
        return (
            <div className="container Site-content">
                <h5>마이페이지</h5>

                <div className="row">
                    <MyPageButton
                        image='https://image.freepik.com/free-icon/1_318-10653.jpg'
                        link='/cart'
                        name='CART'
                        description='장바구니 조회'/>
                    <MyPageButton
                        image='https://static.thenounproject.com/png/101952-200.png'
                        link='ordered'
                        name='ORDER'
                        description='주문내역 조회'/>
                    <MyPageButton
                        image='https://icons-for-free.com/iconfiles/png/512/friend+human+man+member+person+profile+user+users+icon-1320168707291252637.png'
                        link='profile'
                        name='PROFILE'
                        description='회원정보 수정'/>
                    <MyPageButton
                        image='https://static.thenounproject.com/png/19653-200.png'
                        link='favorite'
                        name='RECIPE'
                        description='레시피 즐겨찾기'/>
                </div>
            </div>
        )
    }
}

export default MyPage