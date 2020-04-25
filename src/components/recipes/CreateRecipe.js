import React, { useState, useContext } from 'react'
import RecipeContent from './RecipeContent'
import { RecipeContext } from '../../contexts/recipeContext'
import { useDispatch } from 'react-redux'
import { createRecipe } from '../../store/actions/recipeActions'

const CreateRecipe = () => {

    const [steps, setSteps] = useState(1)
    const {recipe, setRecipe} = useContext(RecipeContext)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setRecipe({...recipe, [e.target.id]: e.target.value})
    }

    const handleFileInput = (e) => {
        setRecipe({
            ...recipe,
            img: e.target.files[0],
            imgUrl: URL.createObjectURL(e.target.files[0])
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createRecipe(recipe))
    }

    const handleArrayChange = (e) => {
        setRecipe({...recipe, 
        //정규식으로 띄어쓰기 상관없게 만들기
            [e.target.id]: e.target.value.split(', ')})
    }

    const handleContentChange = (e) => {
        console.log('a')
    }

    const addContent = (e) => {
        e.preventDefault()
        setSteps(steps+1)
    }

    return ( 
        <div className="container Site-content">
            <form onSubmit={handleSubmit}>
                <h4 className="grey-text text-darken-1">레시피 등록</h4>
                <div className="row valign-wrapper">
                    <div className="col s12 l6">
                        {recipe.imgUrl? <img className="responsive-img" src={recipe.imgUrl} alt=""/> : <h5 className="center grey-text text-lighten-1">이미지 없음</h5>}
                    </div>
                    <div className="col s12 l6">
                        <div className="input-field">
                            <label htmlFor="id">레시피 번호</label>
                            <input type="text" id="id" onChange={handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="name">레시피명</label>
                            <input type="text" id="name" onChange={handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="time">시간</label>
                            <input type="number" id="time" onChange={handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="ingredients">재료</label>
                            <input type="text" id="ingredients" onChange={handleArrayChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="difficulty">난이도</label>
                            <input type="text" id="difficulty" onChange={handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="tag">태그</label>
                            <input type="text" id="tag" onChange={handleArrayChange}/>
                        </div>
                        <div className="file-field input-field">
                            <div className="btn brown lighten-2">
                                <span>이미지 업로드</span>
                                <input type="file" onChange={handleFileInput}/>
                            </div>
                            <div className="file-path-wrapper">
                                <input type="text" className="file-path wrapper"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="input-field">
                        <label htmlFor="introduction">상품 설명</label>
                        <textarea id="introduction" onChange={handleChange} className="materialize-textarea"></textarea>
                    </div>
                <div className="input-field">
                    {Array.apply(0, Array(steps)).map((step, idx) => <RecipeContent step={idx} key={idx}/>)}
                </div>
                <div className="input-field center">
                    <button className="btn brown lighten-2" style={{marginRight:"4px"}} onClick={addContent}>내용 추가</button>
                    <button className="btn brown lighten-2">레시피 등록</button>
                </div>
            </form>
        </div>
    );
}
 
export default CreateRecipe;