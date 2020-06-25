import React, {Component} from 'react'
import Search from '../layout/Search'
import RecipeButton from '../recipes/RecipeButton'
import {connect} from 'react-redux'
import {firestoreConnect, getFirebase} from 'react-redux-firebase'
import {compose} from 'redux'
import {addToCart} from '../../store/actions/cartActions'
import {deleteProduct} from '../../store/actions/productActions'

class ProductDetail extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    state = {
        quantity: 1,
    }

    putIntoCart = () => {
        this.props.addToCart(this.props.recipeAndProduct.find((product) => product.id===this.props.id), this.state.quantity)
        alert('장바구니에 '+this.state.quantity+'개 추가되었습니다.')
    }

    buy = () => {
        console.log('buy '+this.state.quantity)
    }

    plus = (e) => {
        e.preventDefault()
        const id = this.props.id
        const product = this.props.recipeAndProduct.find((product) => product.id===id)
        const firebase = getFirebase()
        const userCart0 = (this.props.user||[]).filter((user)=>user.id===firebase.auth().currentUser.uid)[0]
            .cart.find((item)=>item.id===product.id)
        const userCart = userCart0? userCart0.qty : 0
        if (this.state.quantity+userCart<product.stock) {
            this.setState({
                quantity: this.state.quantity+1,
            })
        } else {
            alert(`현재 장바구니에 넣을 수 있는 최대 수량은 ${this.state.quantity}개입니다.`)
        }
    }

    minus = () => {
        if (this.state.quantity>1) {
            this.setState({
                quantity: this.state.quantity-1,
            })
        }
    }

    deleteProduct(id) {
        this.props.deleteProduct(id)
        this.props.history.goBack()
    }

    render() {
        const id = this.props.id
        const RnP = this.props.recipeAndProduct
        const product = RnP?RnP.find((product) => product.id===id):{
            img: '',
            name: '',
            price: '',
            company: '',
            madein: '',
        }
        const recipe = RnP&&RnP.filter((recipe) => recipe.type==='recipe'&&
                                          recipe.ingredients.indexOf(product.tag)!== -1)
        const firebase = getFirebase()
        const isAdmin = firebase.auth().currentUser && (firebase.auth().currentUser.uid==='XlIC5HDHQIOYDc9wILQokNfhzFA2')
        return (
            <div className='container Site-content'>
                <Search/>
                <div className='row'>
                    <div className='col s12 l6'>
                        <img className='responsive-img materialboxed' src={product.img} alt=''/>
                    </div>
                    <div className='col s12 l6'>
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan='2'>
                                        <h4>{product.name}</h4>
                                    </td>
                                </tr>
                                {isAdmin? <tr>
                                    <td width='40%'>상품번호</td>
                                    <td>{product.id}</td>
                                </tr> : null}
                                <tr>
                                    <td width='40%' className='blue-text text-lighten-2 flow-text'>가격</td>
                                    <td className='blue-text text-lighten-2 flow-text'>{product.price}원</td>
                                </tr>
                                <tr>
                                    <td width='40%'>제조사</td>
                                    <td>{product.company}</td>
                                </tr>
                                <tr>
                                    <td width='40%'>원산지</td>
                                    <td>{product.madeIn}</td>
                                </tr>
                            </tbody>
                        </table>
                        {isAdmin? (
                            <div style={{marginTop: '12px'}}>
                                <button style={{marginRight: '4px'}} className='btn brown' onClick={() => console.log('수정')}>수정</button>
                                <button style={{marginRight: '4px'}} className='btn brown' onClick={() => this.deleteProduct(id)}>삭제</button>
                            </div>
                        ) : firebase.auth().currentUser? (
                            <div className='grey lighten-3'>
                                <div className='card'>
                                    <div className='card-content'>
                                        <div className='row' style={{marginBottom: '0px'}}>
                                            <div className='col s3 l3 flow-text center-align'>
                                                {this.state.quantity}
                                            </div>
                                            <div className='col s4 l4 valign-wrapper'>
                                                <button className='btn white black-text' type='button' onClick={this.minus}><i className='material-icons'>remove</i></button>
                                                <button className='btn white black-text' type='button' onClick={this.plus}><i className='material-icons'>add</i></button>
                                            </div>
                                            <div className='col s5 l5 flow-text right-align'>
                                                {this.state.quantity*product.price}원
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-action'>
                                        <button style={{marginRight: '4px'}} className='btn brown' onClick={this.buy}>바로구매</button>
                                        <button className='btn brown waves-effect waves-light' onClick={this.putIntoCart}>장바구니</button>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className='row'>
                    <div style={{whiteSpace: 'pre-wrap'}} className='flow-text center-align'>
                        {product.content}
                    </div>
                    <hr/>
                    <h4 className='center'>관련 레시피</h4>
                    <div className='row' id='recipe'>
                        {recipe && recipe.map((recipe) => {
                            return (
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
    const id=ownProps.match.params.id
    const cart = state.cart

    return {
    // product: product,
    // recipe: recipe.filter(recipe => recipe.ingredients.indexOf(product.tag)!== -1),
        recipeAndProduct: state.firestore.ordered.recipeAndProduct,
        cart: cart,
        id: id,
        user: state.firestore.ordered.users,
    }
    /**
     * recipe의 ingredients 배열 내에
     * product의 tag가 있다면 true
     */
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product, quantity) => {
            dispatch(addToCart(product, quantity))
        },
        deleteProduct: (id) => {
            dispatch(deleteProduct(id))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{collection: 'recipeAndProduct'}]),
    firestoreConnect([{collection: 'users'}]),
)(ProductDetail)
