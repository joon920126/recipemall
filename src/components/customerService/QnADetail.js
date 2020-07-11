import React, {Component} from 'react'
import {compose} from 'redux'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {firestoreConnect, getFirebase} from 'react-redux-firebase'
import ReplyQnA from './ReplyQnA'


class QnADetail extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const firebase = getFirebase()
        const qna= this.props.qna && this.props.qna.find((qa) => qa.id === this.props.id) ||[]
        const isAdmin = firebase.auth().currentUser && (firebase.auth().currentUser.uid==='XlIC5HDHQIOYDc9wILQokNfhzFA2')

        return (
            <div className='container Site-content'>
                <h4 className='grey-text text-darken-1'>고객센터</h4>
                <hr/>
                <div className='row'>
                    <div className='col s12 l3'>
                        <h6>이름: {qna.name}</h6>
                    </div>
                    <div className='col s12 l9'>
                        <h6>제목: {qna.title}</h6>
                    </div>
                </div>
                <hr/>
                <div className='row'>
                    <div className='col s12 l12'>
                        <h6>{qna.content}</h6>
                    </div>
                </div>
                {/* {isAdmin?
                    <ReplyQnA/> :
                    null} */}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id

    return {
        qna: state.firestore.ordered.qna,
        id: id,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'qna'}]),
)(QnADetail)
