import React, {Component} from 'react'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'


class QnADetail extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const qna= this.props.qna && this.props.qna.find((qa) => qa.id === this.props.id) ||[]

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
