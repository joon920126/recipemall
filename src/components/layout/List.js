import React, { Component } from 'react'
import ProductButton from '../products/ProductButton'
import RecipeButton from '../recipes/RecipeButton'
import Search from '../layout/Search'
import {connect} from 'react-redux'

class List extends Component {

    render() {
        const keyword = this.props.keyword
        const product = this.props.product
        const recipe = this.props.recipe

        return (
            <div className="container Site-content">
            <Search/>
                <h5 className="center">'{keyword}' 검색결과</h5>
                <div className="row">
                    {recipe && recipe.map(recipe => {
                        return(
                            <RecipeButton recipe={recipe} key={recipe.id}/>
                        )
                    })}
                    {product && product.map(product => {
                        return (
                            <ProductButton product={product} key={product.id} />
                        )
                    })}
                </div>
                <div className="row">
                    <ul className="pagination center">
                        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                        <li className="waves-effect"><a href="#!">1</a></li>
                        <li className="waves-effect"><a href="#!">2</a></li>
                        <li className="waves-effect"><a href="#!">3</a></li>
                        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log();
    
    return {
        keyword: state.search.keyword,
        product: state.product.product.filter(prod => prod.name.includes(state.search.keyword)
                                                    ||prod.tag.includes(state.search.keyword)),
        recipe: state.recipe.recipe.filter(rec => rec.name.includes(state.search.keyword)
                                                ||rec.tag.includes(state.search.keyword))
                
    }
}

export default connect(mapStateToProps)(List)