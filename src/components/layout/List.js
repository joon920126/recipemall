import React, { Component } from 'react'
import ProductButton from '../products/ProductButton'
import RecipeButton from '../recipes/RecipeButton'
import Search from '../layout/Search'
import {connect} from 'react-redux'

class List extends Component {

    render() {
        const keyword = this.props.keyword
        // const product = this.props.product
        // const recipe = this.props.recipe
        // const productAndRecipe = [...product,...recipe].sort((a,b)=>parseInt(a.id,10)-parseInt(b.id,10))
        // console.log(productAndRecipe)
        const recipeAndProduct = this.props.recipeAndProduct
        console.log(this.props.recipeAndProduct)

        return (
            <div className="container Site-content">
            <Search/>
                <h5 className="center">'{keyword}' 검색결과</h5>
                <div className="row">
                    {/* {recipe && recipe.map(recipe => <RecipeButton recipe={recipe} key={recipe.id}/>)}
                    {product && product.map(product => <ProductButton product={product} key={product.id}/>)} */}
                    {/* {productAndRecipe && productAndRecipe.map(item => item.madein? <ProductButton product={item} key={'product'+item.id}/>:<RecipeButton recipe={item} key={'recipe'+item.id}/>)} */}
                    {recipeAndProduct && recipeAndProduct.map(item => {
                        switch(item.type){
                            case 'recipe':
                                return <RecipeButton recipe={item} key={'recipe'+item.id}/>
                            case 'product':
                                return <ProductButton product={item} key={'product'+item.id}/>
                            default: return
                        }
                    })}
                </div>
                <div className="row">
                    <ul className="pagination center">
                        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                        <li className="waves-effect"><a href="#!">1</a></li>
                        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        keyword: state.search.keyword,
        // product: state.product.product.filter(prod => prod.name.includes(state.search.keyword)
        //                                             ||prod.tag.includes(state.search.keyword)),
        // recipe: state.recipe.recipe.filter(rec => rec.name.includes(state.search.keyword)
        //                                         ||rec.tag.includes(state.search.keyword))
        recipeAndProduct: [...state.recipeAndProduct.product, ...state.recipeAndProduct.recipe]
                          .sort((a,b)=>parseInt(a.id,10)-parseInt(b.id,10))
                          .filter(item => item.name.includes(state.search.keyword)||item.tag.includes(state.search.keyword))
    }
}

export default connect(mapStateToProps)(List)