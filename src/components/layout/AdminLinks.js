import React from 'react'
import {Button, Dropdown} from 'react-materialize'
import { NavLink } from 'react-router-dom'

const AdminLinks = () => {
    return (
        <div>
            <ul className="right">
                <li>
                    <Dropdown trigger={
                        <Button className="transparent z-depth-0" tooltip="관리자 계정으로 접속중입니다.">
                            <i className="fas fa-user-cog"></i>
                        </Button>
                    }>
                        <NavLink to='/CreateProduct' className="brown-text">상품등록</NavLink>
                        <NavLink to='/CreateRecipe' className="brown-text">레시피등록</NavLink>
                        <NavLink to='/Member' className="brown-text">회원관리</NavLink>
                        <NavLink to='/AdminQnA' className="brown-text">고객센터</NavLink>
                        <NavLink to='/AdminShipping' className="brown-text">배송관리</NavLink>
                        <NavLink to='/' className="brown-text">로그아웃</NavLink>
                    </Dropdown>
                </li>
            </ul>
        </div>
    )
}

export default AdminLinks