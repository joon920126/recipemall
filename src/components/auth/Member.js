import React, { Component } from 'react'
import MemberSummary from './MemberSummary'
import {connect} from 'react-redux'
import { firestoreConnect, getFirebase, getFirestore } from 'react-redux-firebase'
import { compose } from 'redux'

class Member extends Component {

    render() {
        const user = this.props.user
        const rows = user&& user.map(member => <MemberSummary
                                            member={member}
                                            info={user.find(user=>user.id === member.id)}
                                            key={member.id}
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
        user: state.firestore.ordered.users
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'users'}])
)(Member)