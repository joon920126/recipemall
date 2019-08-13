import React, { Component } from 'react'
import ProductButton from '../products/ProductButton'
import RecipeButton from '../recipes/RecipeButton'
import Search from '../layout/Search'
import {connect} from 'react-redux'

class List extends Component {

    render() {
        const {product} = this.props.product
        const {recipe} = this.props.recipe

        return (
            <div className="container">
            <Search/>
                <h5 className="center">'{}'검색결과</h5>
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
     return {
         product: state.product,
         recipe: state.recipe
     }
}

export default connect(mapStateToProps)(List)