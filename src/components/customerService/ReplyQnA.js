import React, {Component} from 'react'
import {connect} from 'react-redux'
import {replyQnA} from '../../store/actions/qnaActions'

class ReplyQnA extends Component {
    state = {
        content: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.replyQnA(this.state)
    }

    render() {
        return (
            <div className='container Site-content'>
                <form onSubmit={this.handleSubmit}>
                    <div className='row'>
                        <div className='col s12 l12'>
                            <h4 className='grey-text text-darken-1'>Q&A등록</h4>
                        </div>
                        <div className='col s2 l2'>
                            <div className='input-field'>
                                <label htmlFor='name'>이름</label>
                                <input required type='text' id='name' onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className='col s2 l2'>
                            <div className='input-field'>
                                <label htmlFor='name'>비밀번호</label>
                                <input required type='text' id='password' onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className='col s8 l8'>
                            <div className='input-field'>
                                <label htmlFor='title'>제목</label>
                                <input required type='text' id='title' onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className='col s12 l12'>
                            <div className='input-field'>
                                <label htmlFor='content'>내용</label>
                                <textarea required className='materialize-textarea' type='text' id='content' onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className='input-field center'>
                        <button className='btn brown lighten-2'>Q&A등록</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        replyQnA: (content) => dispatch(replyQnA(content)),
    }
}

export default connect(null, mapDispatchToProps)(ReplyQnA)
