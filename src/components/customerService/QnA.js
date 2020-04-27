import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect, getFirebase} from 'react-redux-firebase'
import moment from 'moment'
import {Redirect} from 'react-router-dom'

class QnA extends Component {
    render() {
        if (!this.props.auth.uid) return <Redirect to='/'/>
        const qna = (this.props.qna||[])
        const page = this.props.page
        const qnaSlice = (qna.slice().sort((a, b)=>b.createdAt.seconds-a.createdAt.seconds)
            .slice(15*(page-1), 15*page))
        return (
            <div className='container Site-content'>
                <h4 className='grey-text text-darken-1'>고객센터</h4>

                <table className='highlight centered'>
                    <thead>
                        <tr>
                            <th>작성자</th>
                            <th>제목</th>
                            <th>작성일자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {qnaSlice && qnaSlice.map((qna) => {
                            return (
                                <tr key={qna.id}>
                                    <td>{qna.name}</td>
                                    <td>
                                        <Link to={'/qnaDetail/'+qna.id} className='black-text'>
                                            {qna.title}
                                        </Link>
                                    </td>
                                    <td>{moment(qna.createdAt.miliseconds).format('YYYY/MM/DD')}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className='row'>
                    <ul className='pagination center'>
                        {page>1? <li className='waves-effect'>
                            <Link to={'/qna/'+(page-1)}>
                                <i className='material-icons'>chevron_left</i>
                            </Link>
                        </li> :null}
                        {Object.keys(Array.apply(0, Array(Math.ceil(qna.length/15))))
                            .map((idx) => <li className='waves-effect' key={idx}>
                                <Link to={'/qna/'+(parseInt(idx)+1)}>{parseInt(idx)+1}</Link>
                            </li>)}
                        {page<Math.ceil(qna.length/15)? <li className='waves-effect'>
                            <Link to={'/qna/'+(page+1)}>
                                <i className='material-icons'>chevron_right</i>
                            </Link>
                        </li> : null}
                    </ul>
                </div>
                <Link className='btn brown lighten-2' to='/CreateQnA'>글쓰기</Link>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        page: parseInt(ownProps.match.params.page),
        qna: state.firestore.ordered.qna,
        auth: state.firebase.auth,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'qna'}]),
)(QnA)
