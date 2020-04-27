import React, {Component} from 'react'
import RecipeButtonAlt from '../recipes/RecipeButtonAlt'
import Search from '../layout/Search'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {firestoreConnect, getFirebase} from 'react-redux-firebase'
import {compose} from 'redux'

class Favorite extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const firebase = getFirebase()
    const page = this.props.page
    const recipe = (this.props.recipe||[]).filter((item)=>item.type==='recipe')||[]
    const favoriteWhole = (((this.props.users||[]).find((user)=>user.id===firebase.auth().currentUser.uid)||{})
        .favorite||[]).map((item)=>recipe.find((rec)=>rec.id===item.id))
    const favorite = favoriteWhole.slice(8*(page-1), 8*page)

    if (favoriteWhole===0) {
      return (
        <div className="container Site-content">
          <Search/>
          <h5>즐겨찾기</h5>
          <span>즐겨찾기에 등록된 레시피가 없습니다.</span>
        </div>
      )
    } else {
      return (
        <div className="container Site-content">
          <Search/>
          <h5>즐겨찾기</h5>
          <div className="row">
            {favorite && favorite.map((favorite) => {
              return (
                <RecipeButtonAlt recipe={favorite} key={favorite.id}/>
              )
            })}
          </div>
          <div className="row">
            <ul className="pagination center">
              <ul className="pagination center">
                {page>1?<li className="waves-effect"><Link to={'/favorite/'+(page-1)}><i className="material-icons">chevron_left</i></Link></li>:null}
                {Object.keys(Array.apply(0, Array(Math.ceil(favoriteWhole.length/8))))
                    .map((idx)=><li className="waves-effect" key={idx}>
                      <Link to={'/favorite/'+(parseInt(idx)+1)}>{parseInt(idx)+1}</Link>
                    </li>)}
                {page<Math.ceil(favoriteWhole.length/8)? <li className="waves-effect"><Link to={'/favorite/'+(page+1)}><i className="material-icons">chevron_right</i></Link></li> : null}
              </ul>
            </ul>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    page: parseInt(ownProps.match.params.page),
    users: state.firestore.ordered.users,
    recipe: state.firestore.ordered.recipeAndProduct,
  }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'recipeAndProduct'}]),
    firestoreConnect([{collection: 'users'}]),
)(Favorite)
