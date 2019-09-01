import React, { Component } from 'react'
import RecipeButton from '../recipes/RecipeButton'
import Search from '../layout/Search'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Favorite extends Component {

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render() {
        const page = this.props.page
        const favorite = this.props.favorite.slice(8*(page-1), 8*page)

        if(this.props.favorite.length===0) {
            return(
                <div className="container Site-content">
                    <Search/>
                    <h5>즐겨찾기</h5>
                    <span>즐겨찾기에 등록된 레시피가 없습니다.</span>
                </div>
            )
        }else{
            return (
                <div className="container Site-content">
                <Search/>
                <h5>즐겨찾기</h5>
                    <div className="row">
                        {favorite && favorite.map(favorite => {
                            return(
                                <RecipeButton recipe={favorite} key={favorite.id}/>
                            )
                        })}
                    </div>
                    <div className="row">
                        <ul className="pagination center">
                        <ul className="pagination center">
                            {page>1?<li className="waves-effect"><Link to={'/favorite/'+(page-1)}><i className="material-icons">chevron_left</i></Link></li>:null}
                            {Object.keys(Array.apply(0,Array(Math.ceil(this.props.favorite.length/8))))
                                   .map(idx=><li className="waves-effect" key={idx}>
                                                <Link to={'/favorite/'+(parseInt(idx)+1)}>{parseInt(idx)+1}</Link>
                                             </li>)}
                            {page<Math.ceil(this.props.favorite.length/8)? <li className="waves-effect"><Link to={'/favorite/'+(page+1)}><i className="material-icons">chevron_right</i></Link></li> : null}
                        </ul>
                        </ul>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    let favorite = state.recipeAndProduct.favorite.map(fav => state.recipeAndProduct.recipe.find(rec => rec.id===fav))
    return {
         favorite: favorite,
         page: parseInt(ownProps.match.params.page)
    }
}

export default connect(mapStateToProps)(Favorite)