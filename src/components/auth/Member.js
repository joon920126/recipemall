import React, {Component} from 'react'
import MemberSummary from './MemberSummary'
import MemberSearch from '../layout/MemberSearch'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Link} from 'react-router-dom'

class Member extends Component {
    state = {
        sortBy: 'byEmail',
    }

    handleRadioChange(e) {
        this.setState({sortBy: e.target.id})
    }

    render() {
        const keyword = this.props.location.state? this.props.location.state.keyword : ''
        const filter = this.props.location.state? this.props.location.state.filter : 'all'

        const user = this.props.user
        const page = this.props.page
        const searchedUser = filter==='phone'?
            user&& user.slice().filter((member) => member.phone.includes(keyword)) :
            filter === 'name'?
                user&& user.slice().filter((member) => member.name.includes(keyword)) :
                filter === 'email'?
                    user&& user.slice().filter((member) => member.email.includes(keyword)) :
                    filter === 'all' ?
                        user&& user.slice().filter((member) => member.phone.includes(keyword) || member.name.includes(keyword) || member.email.includes(keyword)) : null


        const sortedUser = searchedUser && searchedUser.sort((a, b) => {
            switch (this.state.sortBy) {
            case 'byName': return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
            case 'byEmail': return a.email < b.email ? -1 : a.email > b.email ? 1 : 0
            case 'byPhone': return a.phone < b.phone ? -1 : a.phone > b.phone ? 1 : 0
            }
        }).slice(20*(page-1), 20*page)
        const rows = sortedUser&& sortedUser.map((member) => <MemberSummary
            member={member}
            info={user.find((user)=>user.id === member.id)}
            key={member.id}
        />)
        return (
            <div className='container Site-content'>
                <div className='row'>
                    <div className='col s8 l8'>
                        <h5>회원관리</h5>
                    </div>
                    <div className='col s4 l4' style={{marginTop: '22px'}}>
                        <span style={{marginRight: '12px'}}>정렬</span>
                        <label style={{marginRight: '12px'}}>
                            <input type='radio' name='filter' className='with-gap' id='byEmail' onChange={() => this.handleRadioChange}/>
                            <span>이메일</span>
                        </label>
                        <label style={{marginRight: '12px'}}>
                            <input type='radio' name='filter' className='with-gap' id='byName' onChange={() => this.handleRadioChange}/>
                            <span>이름</span>
                        </label>
                        <label>
                            <input type='radio' name='filter' className='with-gap' id='byPhone' onChange={() => this.handleRadioChange}/>
                            <span>전화번호</span>
                        </label>
                    </div>
                </div>
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
                <div className='row'>
                    <ul className='pagination center'>
                        {page>1?<li className='waves-effect'><Link to={'/member/'+(page-1)}><i className='material-icons'>chevron_left</i></Link></li>:null}
                        {user&& Object.keys(Array.apply(0, Array(Math.ceil(user.length/20))))
                            .map((idx) => <li className='waves-effect' key={idx}>
                                <Link to={'/Member/'+(parseInt(idx)+1)}>
                                    {parseInt(idx)+1}
                                </Link>
                            </li>)}
                        {user&&page<Math.ceil(user.length/20)? <li className='waves-effect'><Link to={'/member/'+(page+1)}><i className='material-icons'>chevron_right</i></Link></li> : null}
                    </ul>
                </div>
                <MemberSearch/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.firestore.ordered.users,
        page: parseInt(ownProps.match.params.page),
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'users'}]),
)(Member)
