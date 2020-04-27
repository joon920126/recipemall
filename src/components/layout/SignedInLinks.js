import React from 'react'
import {Button, Dropdown} from 'react-materialize'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <div>
            <ul className='right'>
                <li><NavLink to='/Cart'>장바구니</NavLink></li>
                <li><a onClick={props.logOut}>로그아웃</a></li>
                <li><Dropdown trigger={
                    <Button className='transparent z-depth-0'>
                        <i className='fas fa-user'></i>
                    </Button>
                }>
                    <NavLink to='/mypage' className='brown-text'>회원정보</NavLink>
                    <NavLink to='/favorite/1' className='brown-text'>즐겨찾기</NavLink>
                    <NavLink to='/shipping' className='brown-text'>배송조회</NavLink>
                    <NavLink to='/qna/1' className='brown-text'>고객센터</NavLink>
                </Dropdown></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut()),
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
