import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeFromFavorite} from '../../store/actions/recipeActions'

const RecipeButtonAlt = ({recipe, dispatch, isAdmin}) => {
  const handleClick = () => {
    dispatch(removeFromFavorite(recipe))
  }

  return (
    <div className='col s6 l3'>
      <div className='card hoverable'>
        <div className='card-image'>
          <Link to={'/recipe/'+recipe.id} key={recipe.id}>
            <img src={recipe.img} alt=''/>
          </Link>
          {isAdmin? null : <i className='fas fa-times halfway-fab btn-floating center grey lighten-1' onClick={handleClick}></i>}
        </div>
        <div className='card-content recipe-button'>
          <div><Link to={'/recipe/'+recipe.id} key={recipe.id}><span className='card-title grey-text text-darken-2'><strong>{recipe.name}</strong></span></Link></div>
          <h6 className='grey-text'>{recipe.time}분</h6>
          <h6 className='grey-text'>난이도: {recipe.difficulty}</h6>
        </div>
      </div>
    </div>
  )
}


export default connect()(RecipeButtonAlt)
