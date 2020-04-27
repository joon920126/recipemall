import React, {Component} from 'react'
import ProductButton from '../products/ProductButton'
import RecipeButton from '../recipes/RecipeButton'
import RecipeButtonAlt from '../recipes/RecipeButtonAlt'
import Search from '../layout/Search'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {firestoreConnect, getFirebase} from 'react-redux-firebase'
import {compose} from 'redux'

class List extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const keyword = this.props.location.state.keyword
    const page = this.props.page
    const firebase = getFirebase()
    const RnP=(this.props.recipeAndProduct||[])
    const recipeAndProduct = RnP.slice(60*(page-1), 60*page)
        .filter((item) => item.name.includes(keyword)||
                                          item.tag.includes(keyword))
    const favorite = ((this.props.users||[]).find((user)=>user.id===firebase.auth().currentUser.uid)||{}).favorite||[]
    const isAdmin = firebase.auth().currentUser && (firebase.auth().currentUser.uid==='XlIC5HDHQIOYDc9wILQokNfhzFA2')

    return (
      <div className='container Site-content'>

        <Search/>
        <h5 className='center'>'{keyword}' 검색결과</h5>
        <div className='row'>
          {recipeAndProduct && recipeAndProduct.map((item) => {
            switch (item.type) {
              case 'recipe':
                if (this.props.location.state.includeRecipe) {
                  if (favorite.filter((fav)=>fav.id===item.id).length!==0) {
                    return <RecipeButtonAlt recipe={item} key={'recipe'+item.id} isAdmin={isAdmin}/>
                  } else {
                    return <RecipeButton recipe={item} key={'recipe'+item.id} isAdmin={isAdmin}/>
                  }
                } else return null
              case 'product':
                if (this.props.location.state.includeProduct) {
                  return <ProductButton product={item} key={'product'+item.id} isAdmin={isAdmin}/>
                } else return null
              default: return null
            }
          })}
        </div>
        <div className='row'>
          <ul className='pagination center'>
            {page>1?<li className='waves-effect'><Link to={'/list/'+(page-1)}><i className='material-icons'>chevron_left</i></Link></li>:null}
            {Object.keys(Array.apply(0, Array(Math.ceil(RnP.length/60))))
                .map((idx)=><li className='waves-effect' key={idx}>
                  <Link to={'/list/'+(parseInt(idx)+1)}>{parseInt(idx)+1}</Link>
                </li>)}
            {page<Math.ceil(RnP.length/60)? <li className='waves-effect'><Link to={'/list/'+(page+1)}><i className='material-icons'>chevron_right</i></Link></li> : null}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipeAndProduct: state.firestore.ordered.recipeAndProduct,
    users: state.firestore.ordered.users,
    page: parseInt(ownProps.match.params.page),
  }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'recipeAndProduct'}]),
    firestoreConnect([{collection: 'users'}]),
)(List)
