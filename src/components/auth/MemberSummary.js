import React from 'react'
import {Link} from 'react-router-dom'

const MemberSummary = (member) => {
    const auth = member.member
    const user = member.info
    return (
        <tr>
            <td>{auth.email}</td>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td><Link to={'/memberdetail/'+auth.id} className='btn brown'>조회</Link></td>
            <td><span className='btn brown'>삭제</span></td>
        </tr>
    )
}

export default MemberSummary
