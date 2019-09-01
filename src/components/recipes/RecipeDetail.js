import React, {Component} from 'react'
import {connect} from 'react-redux'
import Search from '../layout/Search'
import ProductButton from '../products/ProductButton'

class RecipeDetail extends Component {

    componentDidMount(){
        window.scrollTo(0,0)
    }
    
    render(){
        const recipe=this.props.recipe
        const product=this.props.product

        return (
            <div className="container Site-content">
                <Search/>
                <div className="row">
                    <div className="col s12 l6">
                        <img className="responsive-img" src={recipe.img} alt=""/>
                    </div>
                    <div className="col s12 l6">
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan="2">
                                        <h4>{recipe.name}</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="40%">소요시간</td>
                                    <td>{recipe.time}분</td>
                                </tr>
                                <tr>
                                    <td width="40%">난이도</td>
                                    <td>{recipe.difficulty}</td>
                                </tr>
                                <tr>
                                    <td width="40%">재료</td>
                                    <td>{recipe.ingredients.join(', ')}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style={{marginTop:"12px"}}>
                            <button style={{marginRight:"4px"}} className="btn brown" onClick={this.buyAll}>모든 재료 구매</button>
                            <a href="#ingredients" className="btn brown">개별 재료 보러가기</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {recipe.introduction && recipe.introduction.map((intro, index) => <p className="flow-text center-align" key={index}>{intro}</p>)}
                    {recipe.content && recipe.content.map((content, index) => {
                        return (
                            <div className="row valign-wrapper" key={index}>
                                <div className="col s4 l4">
                                    <img src={recipe.contentimg[index]} alt="" className="responsive-img"/>
                                </div>
                                <div className="col s8 l7 offset-l1">
                                    <h6>{content}</h6>
                                </div>
                            </div>
                        )
                    })}
                    <hr/>
                    <h4 className="center">관련상품</h4>
                    <div id="ingredients">
                        {product && product.map(product => <ProductButton product={product} key={product.id}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id
    let recipe = state.recipeAndProduct.recipe.find(recipe => recipe.id === id)
    return {
        recipe: recipe,
        product: state.recipeAndProduct.product.filter(product=>recipe.ingredients.indexOf(product.tag)!==-1)
    }
}

export default connect(mapStateToProps)(RecipeDetail)