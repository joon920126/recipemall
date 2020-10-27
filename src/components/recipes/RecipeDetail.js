import React, {Component} from 'react'
import {connect} from 'react-redux'
import Search from '../layout/Search'
import ProductButton from '../products/ProductButton'
import {firestoreConnect, getFirebase} from 'react-redux-firebase'
import {compose} from 'redux'
import {Link} from 'react-router-dom'
import {addToFavorite, removeFromFavorite, deleteRecipe} from '../../store/actions/recipeActions'

class RecipeDetail extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    addToFav() {
        this.props.addToFavorite(this.props.recipeAndProduct.find((recipe)=>recipe.id===this.props.id))
    }

    removeFromFav() {
        this.props.removeFromFavorite(this.props.recipeAndProduct.find((recipe)=>recipe.id===this.props.id))
    }

    deleteRecipe(id) {
        if (window.confirm('레시피를 정말로 삭제하시겠습니까?\n삭제된 레시피는 복구할 수 없습니다.')) {
            this.props.history.goBack()
            this.props.deleteRecipe(id)
        }
    }

    render() {
        const firebase = getFirebase()
        const id = this.props.id
        const rnp = this.props.recipeAndProduct
        const recipe = rnp ? rnp.find((recipe)=>recipe.id===id) : {ingredients: []}
        const product = rnp && rnp.filter((product) => product.type==='product' &&
                                                       recipe.ingredients.indexOf(product.tag)!== -1)
        const isAdmin = firebase.auth().currentUser && (firebase.auth().currentUser.uid==='XlIC5HDHQIOYDc9wILQokNfhzFA2')
        const favorite = ((this.props.users||[]).find((user)=>user.id===firebase.auth().currentUser.uid)||{}).favorite||[]
        const isFav = favorite.some((rec) => rec.id===recipe.id)
        return (
            <div className='container Site-content'>
                <Search/>
                <div className='row'>
                    <div className='col s12 l6'>
                        <img className='responsive-img' src={recipe.img} alt=''/>
                    </div>
                    <div className='col s12 l6'>
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan='2'>
                                        <h4>{recipe.name}</h4>
                                    </td>
                                </tr>
                                {isAdmin? <tr>
                                    <td width='40%'>레시피번호</td>
                                    <td>{recipe.id}</td>
                                </tr> : null}
                                <tr>
                                    <td width='40%'>소요시간</td>
                                    <td>{recipe.time}분</td>
                                </tr>
                                <tr>
                                    <td width='40%'>난이도</td>
                                    <td>{recipe.difficulty}</td>
                                </tr>
                                <tr>
                                    <td width='40%'>재료</td>
                                    <td>{recipe.ingredients.join(', ')}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style={{marginTop: '12px'}}>
                            {isAdmin? (
                                <span>
                                    <Link style={{margin: '4px'}} className='btn brown' to={'/updaterecipe/'+recipe.id}>수정</Link>
                                    <button style={{marginRight: '4px'}} className='btn brown' onClick={() => this.deleteRecipe(id)}>삭제</button>
                                </span>
                            ) : (
                                <span>
                                    {isFav?
                                        <button style={{marginRight: '4px'}} className='btn brown' onClick={() => this.removeFromFav()}>즐겨찾기에서 제거</button>:
                                        <button style={{marginRight: '4px'}} className='btn brown' onClick={() => this.addToFav()}>즐겨찾기에 추가</button>
                                    }
                                    {/* <button style={{marginRight: '4px'}} className='btn brown' onClick={this.buyAll}>모든 재료 구매</button> */}
                                    <a href='#ingredients' className='btn brown'>개별 재료 보러가기</a>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <p style={{whiteSpace: 'pre-wrap'}} className='flow-text center-align'>{recipe.introduction}</p>
                    {recipe.content && recipe.content.map((content, index) => {
                        return (
                            <div className='row valign-wrapper' key={index}>
                                <div className='col s4 l4'>
                                    <img src={recipe.contentImg[index]} alt='' className='responsive-img'/>
                                </div>
                                <div className='col s8 l7 offset-l1'>
                                    <h6 style={{whiteSpace: 'pre-wrap'}}>{content}</h6>
                                </div>
                            </div>
                        )
                    })}
                    <hr/>
                    <h4 className='center'>관련상품</h4>
                    <div id='ingredients'>
                        {product && product.map((product) => <ProductButton product={product} key={product.id}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    return {
        recipeAndProduct: state.firestore.ordered.recipeAndProduct,
        id: id,
        users: state.firestore.ordered.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToFavorite: (recipe) => {
            dispatch(addToFavorite(recipe))
        },
        removeFromFavorite: (recipe) => {
            dispatch(removeFromFavorite(recipe))
        },
        deleteRecipe: (id) => {
            dispatch(deleteRecipe(id))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{collection: 'recipeAndProduct'}]),
    firestoreConnect([{collection: 'users'}]),
)(RecipeDetail)
