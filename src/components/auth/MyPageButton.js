import React from 'react'
import {Link} from 'react-router-dom'

const MyPageButton = ({image, linkTo, name, description}) => {
  return (
    <div className="col s6 l3">
      <div className="card hoverable">
        <div className="card-image">
          <Link to={linkTo}><img src={image} alt=""/></Link>
        </div>
        <div className="card-content center-align">
          <Link to={linkTo}>
            <span className="card-title black-text"><strong>{name}</strong></span>
            <span className="grey-text">{description}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default MyPageButton
