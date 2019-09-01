import React, { Component } from 'react'
import ProductButton from '../products/ProductButton'
import RecipeButton from '../recipes/RecipeButton'
import Search from '../layout/Search'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class List extends Component {

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render() {
        const keyword = this.props.keyword
        const page = this.props.page
        // const product = this.props.product
        // const recipe = this.props.recipe
        // const productAndRecipe = [...product,...recipe].sort((a,b)=>parseInt(a.id,10)-parseInt(b.id,10))
        // console.log(productAndRecipe)
        const recipeAndProduct = this.props.recipeAndProduct.slice(8*(page-1), 8*page)

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
                            default: return null
                        }
                    })}
                </div>
                <div className="row">
                    <ul className="pagination center">
                        {page>1?<li className="waves-effect"><Link to={'/list/'+(page-1)}><i className="material-icons">chevron_left</i></Link></li>:null}
                        {Object.keys(Array.apply(0,Array(Math.ceil(this.props.recipeAndProduct.length/8))))
                               .map(idx=><li className="waves-effect" key={idx}>
                                            <Link to={'/list/'+(parseInt(idx)+1)}>{parseInt(idx)+1}</Link>
                                         </li>)}
                        {page<Math.ceil(this.props.recipeAndProduct.length/8)? <li className="waves-effect"><Link to={'/list/'+(page+1)}><i className="material-icons">chevron_right</i></Link></li> : null}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        keyword: state.search.keyword,
        // product: state.product.product.filter(prod => prod.name.includes(state.search.keyword)
        //                                             ||prod.tag.includes(state.search.keyword)),
        // recipe: state.recipe.recipe.filter(rec => rec.name.includes(state.search.keyword)
        //                                         ||rec.tag.includes(state.search.keyword))
        recipeAndProduct: [...state.recipeAndProduct.product, ...state.recipeAndProduct.recipe]
                          .sort((a,b)=>parseInt(a.id)-parseInt(b.id))
                          .filter(item => item.name.includes(state.search.keyword)||item.tag.includes(state.search.keyword)),
        page:parseInt(ownProps.match.params.page)
    }
}

export default connect(mapStateToProps)(List)