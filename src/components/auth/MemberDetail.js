import React, { Component } from 'react'
import {connect} from 'react-redux'

class MemberDetail extends Component {

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render() {

        const auth = this.props.auth
        const user = this.props.user

        return (
            <div className='container Site-content'>
                <h5>회원정보</h5>
                <table>
                    <tbody>
                        <tr>
                            <td>이메일</td>
                            <td>{auth.email}</td>
                            <td><span className="btn brown">변경</span></td>
                        </tr>
                        <tr>
                            <td>이름</td>
                            <td>{user.name}</td>
                            <td><span className="btn brown">변경</span></td>
                        </tr>
                        <tr>
                            <td>주소1(+우편번호)</td>
                            <td>{user.address}(우편번호 {user.postnum})</td>
                            <td><span className="btn brown">변경</span></td>
                        </tr>
                        <tr>
                            <td>주소2</td>
                            <td>{user.building}</td>
                            <td><span className="btn brown">변경</span></td>
                        </tr>
                        <tr>
                            <td>연락처</td>
                            <td>{user.contact}</td>
                            <td><span className="btn brown">변경</span></td>
                        </tr>
                        <tr>
                            <td>상태</td>
                            <td>{user.status}</td>
                            <td><span className="btn brown">변경</span></td>
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
        auth: state.auth.auth.find(member => member.uid === ownProps.match.params.id),
        user: state.auth.user.find(member => member.uid === ownProps.match.params.id)
    }
}

export default connect(mapStateToProps)(MemberDetail)