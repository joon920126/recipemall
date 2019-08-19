import React, {Component} from 'react'
import Search from '../layout/Search'
import RecipeButton from '../recipes/RecipeButton'
import {connect} from 'react-redux'

class ProductDetail extends Component {

    state = {
        quantity: 1
    }

    putIntoCart = (e) => {
        this.props.addToCart(this.props.product.id, this.state.quantity)
    }

    buy = (e) => {

    }

    plus = (e) => {
        e.preventDefault()
        const product = this.props.product
        if(this.state.quantity<product.stock){
            this.setState({
                quantity: this.state.quantity+1
            })
        }else{
            
        }
    }
    
    minus = () => {
        if(this.state.quantity>1){
            this.setState({
                quantity: this.state.quantity-1
            })
        }
    }

    render(){
        const product = this.props.product
        const recipe = this.props.recipe
        
        return (
            <div className="container">
                <Search/>
                <div className="row">
                    <div className="col s12 l6">
                        <img className="responsive-img materialboxed" src={product.img} alt=""/>
                    </div>
                    <div className="col s12 l6">
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan="2">
                                        <h4>{product.name}</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="40%" className="blue-text text-lighten-2 flow-text">가격</td>
                                    <td className="blue-text text-lighten-2 flow-text">{product.price}원</td>
                                </tr>
                                <tr>
                                    <td width="40%">제조사</td>
                                    <td>{product.company}</td>
                                </tr>
                                <tr>
                                    <td width="40%">원산지</td>
                                    <td>{product.madein}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="grey lighten-3">
                            <div className="card">
                                <div className="card-content">
                                    <div className="row" style={{marginBottom:"0px"}}>
                                        <div className="col s3 l3 flow-text center-align">
                                            {this.state.quantity}
                                        </div>
                                        <div className="col s4 l4 valign-wrapper">
                                            <button className="btn white black-text" type="button" onClick={this.minus}><i className="material-icons">remove</i></button>
                                            <button className="btn white black-text" type="button" onClick={this.plus}><i className="material-icons">add</i></button>
                                        </div>
                                        <div className="col s5 l5 flow-text right-align">
                                            {this.state.quantity*product.price}원
                                        </div>
                                    </div>
                                </div>
                                <div className="card-action">
                                    <button style={{marginRight:"4px"}} className="btn brown" onClick={this.buy}>바로구매</button>
                                    <button className="btn brown" onClick={this.putIntoCart}>장바구니</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="flow-text center-align">
                        {product.content && product.content.map((content, index) => <p key={index}>{content}</p>)}
                    </div>
                    <hr/>
                    <h4 className="center">관련 레시피</h4>
                    <div className="row" id="recipe">
                        {recipe && recipe.map(recipe => {
                            return(
                                    <RecipeButton recipe={recipe} key={recipe.id}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id=ownProps.match.params.id
    let product = state.product.product.find(product => product.id === id)
    let recipe = state.recipe.recipe

    return {
        product: product,
        recipe: recipe.filter(recipe => recipe.ingredients.indexOf(product.tag)!== -1)
    }
    /**
     * recipe의 ingredients 배열 내에 
     * product의 tag가 있다면 true
     */
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : (id, qty) => {dispatch({type:"ADD_TO_CART", id:id , qty:qty})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)