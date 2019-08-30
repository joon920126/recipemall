import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const RecipeButton = ({recipe, dispatch}) => {
    
    const handleClick = (e) => {
        dispatch({type:'ADD_TO_FAVORITE', id:recipe.id})
    }

    return (
        <div className="col s6 l3">
            <div className="card hoverable">
                <div className="card-image">
                    <Link to={'/recipe/'+recipe.id} key={recipe.id}>
                        <img src={recipe.img} alt=""/>
                    </Link>
                    <i className="fas fa-heart halfway-fab btn-floating center pink lighten-4" onClick={handleClick}></i>
                </div>
                <div className="card-content">
                    <div><Link to={'/recipe/'+recipe.id} key={recipe.id}><span className="card-title grey-text text-darken-2"><strong>{recipe.name}</strong></span></Link></div>
                    <h6 className="grey-text">{recipe.time}분</h6>
                    <h6 className="grey-text">난이도: {recipe.difficulty}</h6>
                </div>
            </div>
        </div>
    )
}


export default connect()(RecipeButton)