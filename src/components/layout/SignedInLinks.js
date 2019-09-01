import React from 'react'
import {Button, Dropdown} from 'react-materialize'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/Cart'>장바구니</NavLink></li>
                <li><NavLink to='/'>로그아웃</NavLink></li>
                <li><Dropdown trigger={
                    <Button className="transparent z-depth-0">
                        <i className="fas fa-user"></i>
                    </Button>
                    }>
                    <NavLink to='/MyPage' className="brown-text">회원정보</NavLink>
                    <NavLink to='/Favorite/1' className="brown-text">즐겨찾기</NavLink>
                    <NavLink to='/Shipping' className="brown-text">배송조회</NavLink>
                    <NavLink to='/QnA' className="brown-text">고객센터</NavLink>
                    </Dropdown></li>
            </ul>
        </div>
    )
}

export default SignedInLinks