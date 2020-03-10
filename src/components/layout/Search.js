import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {search} from '../../store/actions/searchActions'

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
        this.props.search(this.state.keyword, this.state.includeRecipe, this.state.includeProduct)
        this.props.history.push('/list/1', {keyword: this.state.keyword, includeRecipe:this.state.includeRecipe, includeProduct:this.state.includeProduct})
    }
    handleRadioChange = (e) => {
        switch(e.target.id){
            case "all":
                    this.props.history.push('/list/1', {keyword: this.state.keyword, includeRecipe:true, includeProduct:true})

                break
            case "recipe":
                    this.props.history.push('/list/1', {keyword: this.state.keyword, includeRecipe:true, includeProduct:false})

                break
            case "product":
                    this.props.history.push('/list/1', {keyword: this.state.keyword, includeRecipe:false, includeProduct:true})

                break
            default: break
        }
        this.props.search(this.state.keyword, this.state.includeRecipe, this.state.includeProduct)
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
                <div className="container col s12 l4">
                    <div style={{marginTop:'28px'}}>
                        <label style={{marginRight:'12px'}}>
                            <input className="with-gap" name="filter" type="radio" onChange={this.handleRadioChange} id="all" />
                            <span>통합검색</span>
                        </label>
                        <label style={{marginRight:'12px'}}>
                            <input className="with-gap" name="filter" type="radio" onChange={this.handleRadioChange} id="recipe" />
                            <span>레시피</span>
                        </label>
                        <label>
                            <input className="with-gap" name="filter" type="radio" onChange={this.handleRadioChange} id="product" />
                            <span>상품</span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        search: (keyword, includeRecipe, includeProduct) => dispatch(search(keyword, includeRecipe, includeProduct))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Search))