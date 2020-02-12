import React, { Component } from 'react'
import MemberSummary from './MemberSummary'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

class Member extends Component {

    state = {
        sortBy: "email"
    }

    sortByEmail = (e) => {
        e.preventDefault()
        this.setState({sortBy: "email"})
    }

    sortByPhone = (e) => {
        e.preventDefault()
        this.setState({sortBy: "phone"})
    }

    sortByName = (e) => {
        e.preventDefault()
        this.setState({sortBy: "name"})
    }


    render() {
        const user = this.props.user
        const page = this.props.page
        const sortedUser = user&& user.slice().sort((a,b) => {
            switch(this.state.sortBy) {
                case 'name' : return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
                case 'email' : return a.email < b.email ? -1 : a.email > b.email ? 1 : 0
                case 'phone' : return a.phone < b.phone ? -1 : a.phone > b.phone ? 1 : 0
            }
        }).slice(2*(page-1), 2*page)
        const rows = sortedUser&& sortedUser.map(member => <MemberSummary
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
                            <th>연락처</th>
                            <th>회원정보</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                <div className="row">
                    <ul className="pagination center">
                        {page>1?<li className="waves-effect"><Link to={'/member/'+(page-1)}><i className="material-icons">chevron_left</i></Link></li>:null}
                        {user&& Object.keys(Array.apply(0,Array(Math.ceil(user.length/2))))
                               .map(idx => <li className='waves-effect' key={idx}>
                                        <Link to={'/Member/'+(parseInt(idx)+1)}>
                                            {parseInt(idx)+1}
                                        </Link>
                                   </li>)}
                        {user&&page<Math.ceil(user.length/2)? <li className="waves-effect"><Link to={'/member/'+(page+1)}><i className="material-icons">chevron_right</i></Link></li> : null}
                    </ul>
                </div>
                <button className="btn brown" onClick={this.sortByEmail} style={{marginRight:'4px'}}>이메일 순으로 정렬</button>
                <button className="btn brown" onClick={this.sortByName} style={{marginRight:'4px'}}>이름 순으로 정렬</button>
                <button className="btn brown" onClick={this.sortByPhone}>전화번호 순으로 정렬</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.firestore.ordered.users,
        page: parseInt(ownProps.match.params.page)
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'users'}])
)(Member)