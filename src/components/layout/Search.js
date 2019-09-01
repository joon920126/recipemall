import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class Search extends Component {
    state={
        keyword: '',
        includeRecipe: true,
        includeProduct: true
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.search(this.state.keyword)
        this.props.history.push('/list/1')
    }
    render(){
        return (
            <div className="row" style={{marginTop:'16px'}}>
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

const mapDispatchToProps = (dispatch) => {
    return{
        search: (keyword) => {dispatch({type:"SEARCH", keyword:keyword})}
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Search))