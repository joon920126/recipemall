import React, { Component } from 'react'
import {connect} from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux'

class MemberDetail extends Component {

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render() {
        const userList = this.props.users
        const id = this.props.id
        const user = userList? userList.find(user => user.id === id) : {}

        return (
            <div className='container Site-content'>
                <h5>회원정보</h5>
                <table>
                    <tbody>
                        <tr>
                            <td>이메일</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>이름</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>주소1(+우편번호)</td>
                            <td>{user.address}(우편번호 {user.postnum})</td>
                        </tr>
                        <tr>
                            <td>주소2</td>
                            <td>{user.building}</td>
                        </tr>
                        <tr>
                            <td>연락처</td>
                            <td>{user.contact}</td>
                        </tr>
                        <tr>
                            <td>상태</td>
                            <td>{user.status}</td>
                        </tr>
                    </tbody>
                </table>
                <h5>주문내역</h5>
                
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.firestore.ordered.users,
        id: ownProps.match.params.id
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection:'users'}])
)(MemberDetail)