import React from 'react'
import {Button} from 'react-materialize'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from '../../store/actions/authActions'

const AdminLinks = (props) => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/CreateProduct'>상품등록</NavLink></li>
                <li><NavLink to='/CreateRecipe'>레시피등록</NavLink></li>
                <li><NavLink to='/Member'>회원관리</NavLink></li>
                <li><NavLink to='/AdminShipping'>배송관리</NavLink></li>
                <li><a onClick={props.logOut}>로그아웃</a></li>
                <li>
                        <Button className="transparent z-depth-0" tooltip="관리자 계정으로 접속중입니다.">
                            <i className="fas fa-user-cog"></i>
                        </Button>   
                </li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }

}
export default connect(null, mapDispatchToProps)(AdminLinks)