import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class MemberSearch extends Component {
    state={
        keyword: '',
        filter: 'all',
    }
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.history.push('/member/1', {keyword: this.state.keyword, filter: this.state.filter})
    }
    handleRadioChange(e) {
        this.setState({filter: e.target.id})
    }
    render() {
        return (
            <div className='row' style={{marginTop: '16px'}}>
                <div className='container col s12 l4 offset-l2'>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <div className='input-field'>
                            <i className='fas fa-search prefix'></i>
                            <input type='text' onChange={(e) => this.handleChange(e)} id='keyword'/>
                            <label htmlFor='search-keyword'></label>
                        </div>
                    </form>
                </div>
                <div className='container col s12 l4'>
                    <div style={{marginTop: '28px'}}>
                        <label style={{marginRight: '12px'}}>
                            <input className='with-gap' name='filter' type='radio' onChange={(e) => this.handleRadioChange(e)} id='email' />
                            <span>이메일</span>
                        </label>
                        <label style={{marginRight: '12px'}}>
                            <input className='with-gap' name='filter' type='radio' onChange={(e) => this.handleRadioChange(e)} id='name' />
                            <span>이름</span>
                        </label>
                        <label>
                            <input className='with-gap' name='filter' type='radio' onChange={(e) => this.handleRadioChange(e)} id='phone' />
                            <span>전화번호</span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MemberSearch)
