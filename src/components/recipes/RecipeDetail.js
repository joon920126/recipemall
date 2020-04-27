import React, {Component} from 'react'
import {connect} from 'react-redux'
import Search from '../layout/Search'
import ProductButton from '../products/ProductButton'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {addToFavorite} from '../../store/actions/recipeActions'

class RecipeDetail extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

    addToFav = () => {
      this.props.addToFavorite(this.props.recipeAndProduct.find((recipe)=>recipe.id===this.props.id))
    }

    render() {
      const id=this.props.id
      const recipe=this.props.recipeAndProduct && this.props.recipeAndProduct.find((recipe)=>recipe.id===id)
      const product=this.props.recipeAndProduct && this.props.recipeAndProduct.filter((product) => product.type==='product'&&
                                                                  recipe.ingredients.indexOf(product.tag)!== -1)

      return recipe&&product? (
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
                  <div style={{marginTop: '12px'}}>
                    <button style={{marginRight: '4px'}} className="btn brown" onClick={this.addToFav}>즐겨찾기에 추가</button>
                    <button style={{marginRight: '4px'}} className="btn brown" onClick={this.buyAll}>모든 재료 구매</button>
                    <a href="#ingredients" className="btn brown">개별 재료 보러가기</a>
                  </div>
                </div>
              </div>
              <div className="row">
                <p className="flow-text center-align">{recipe.introduction}</p>
                {recipe.content && recipe.content.map((content, index) => {
                  return (
                    <div className="row valign-wrapper" key={index}>
                      <div className="col s4 l4">
                        <img src={recipe.contentImg[index]} alt="" className="responsive-img"/>
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
                  {product && product.map((product) => <ProductButton product={product} key={product.id}/>)}
                </div>
              </div>
            </div>
        ) : <div/>
    }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  return {
    recipeAndProduct: state.firestore.ordered.recipeAndProduct,
    id: id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavorite: (recipe) => {
      dispatch(addToFavorite(recipe))
    },
  }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{collection: 'recipeAndProduct'}]),
)(RecipeDetail)
