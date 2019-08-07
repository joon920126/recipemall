import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Search extends Component {
    state={
        keyword: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.keyword)
        this.props.history.push('/list')
    }
    render(){
        return (
            <div className="row">
                <div className="container col s12 l4 offset-l4">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <i className="fas fa-search prefix"></i>
                            <input type="text" onChange={this.handleChange} id="keyword"/>
                            <label htmlFor="search-keyword">찾으시는 재료나 레시피를 입력하세요</label>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Search)