import React, { Component } from 'react'
import MemberSummary from './MemberSummary'
import {connect} from 'react-redux'

class Member extends Component {

    render() {

        const auth = this.props.auth.auth
        const user = this.props.auth.user

        const rows = auth.map(member => <MemberSummary
                                            member={member}
                                            info={user.find(user=>user.uid === member.uid)}
                                            key={member.uid}
                                        />)

        return (
            <div className="container Site-content">
                <h5>회원관리</h5>
                <table>
                    <thead>
                        <tr>
                            <th>이메일</th>
                            <th>이름</th>
                            <th>상태</th>
                            <th>회원정보</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        user: state.user
    }
}

export default connect(mapStateToProps)(Member)