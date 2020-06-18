import React, {useContext} from 'react'
import {RecipeContext} from '../../contexts/recipeContext'

const RecipeContent = ({step}) => {
    const {recipe, setRecipe} = useContext(RecipeContext)

    const handleChange = (e) => {
        recipe.steps.splice(step, 1, e.target.value)
    }

    const handleFileInput = (e) => {
        e.preventDefault()
        if (e.target.value[0]) {
            recipe.stepImg.splice(step, 1, e.target.files[0])
            recipe.stepImgUrl.splice(step, 1, URL.createObjectURL(e.target.files[0]))
            recipe.stepImgName.splice(step, 1, e.target.files[0].name)
            setRecipe({
                ...recipe,
                stepImgUrl: recipe.stepImgUrl,
            })
        }
    }

    return (
        <div>
            <div className='row' style={{marginBottom: '0px'}}>
                <div className='col s12 l4 center responsive-img materialboxed'>
                    {recipe.stepImgUrl[step]? <img className='responsive-img' src={recipe.stepImgUrl[step]} alt=''/> : <h5 className='center grey-text text-lighten-1'>이미지 없음</h5>}
                </div>
                <div className='col s12 l8 input-field valign-wrapper'>
                    <textarea className='materialize-textarea' id={'step'+step} defaultValue={recipe? recipe.steps[step]||' ':''} onChange={handleChange}></textarea>
                </div>
            </div>
            <div className='row valign-wrapper'>
                <div className='col s12 l8 file-field input-field offset-l4' style={{marginTop: '0px', marginBottom: '0px'}}>
                    <div className='btn brown lighten-2'>
                        <span>이미지 업로드</span>
                        <input type='file' onChange={handleFileInput}/>
                    </div>
                    <div className='file-path-wrapper'>
                        <input type='text' defaultValue={recipe? recipe.stepImgName[step]||' ':''} className='file-path wrapper'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeContent
