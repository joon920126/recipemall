import React from 'react'

const RecipeContent = (step) => {
    return (
        <div className="row">
            <div className="col s12 l4 input-field">
                <h4>image</h4>
                <h4>image</h4>
                <h4>image</h4>
            </div>
            <div className="col s12 l8 input-field valign-wrapper">
                <textarea className="materialize-textarea" id={'step'+step}></textarea>
            </div>
        </div>
    )
}

export default RecipeContent