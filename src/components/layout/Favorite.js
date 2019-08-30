import React, { Component } from 'react'
import RecipeButton from '../recipes/RecipeButton'
import Search from '../layout/Search'
import {connect} from 'react-redux'

class Favorite extends Component {

    render() {
        const favorite = this.props.favorite

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
                        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                        <li className="waves-effect"><a href="#!">1</a></li>
                        <li className="waves-effect"><a href="#!">2</a></li>
                        <li className="waves-effect"><a href="#!">3</a></li>
                        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let favorite = state.recipe.favorite.map(fav => state.recipe.recipe.find(rec => rec.id===fav))
    return {
         favorite: favorite
    }
}

export default connect(mapStateToProps)(Favorite)