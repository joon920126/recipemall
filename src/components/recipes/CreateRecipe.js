import React, { useState } from 'react'
import RecipeContent from './RecipeContent'

const CreateRecipe = () => {

    const [recipe, setRecipe] = useState({
        name: '',
        time: 0,
        ingredients: [],
        difficulty: '',
        img: '',
        content: [],
        contentImg: []
    })

    const handleChange = (e) => {
        setRecipe({...recipe, [e.target.id]: e.target.value})
        console.log(recipe)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(recipe)
    }

    const handleIngredientChange = (e) => {
        setRecipe({...recipe, 
        //정규식으로 띄어쓰기 상관없게 만들기
            [e.target.id]: e.target.value.split(', ')})
    }

    const addContent = (e) => {
        e.preventDefault()
        setRecipe({...recipe,
            content: [...recipe.content, ''],
            contentImg: [...recipe.contentImg, '']
        })
    }

    const handleImageButtonClick = (e) => {
        e.preventDefault()
        console.log('handle image button clicked')
    }

    return ( 
        <div className="container Site-content">
            <form onSubmit={handleSubmit}>
                    <h4 className="grey-text text-darken-1">레시피 등록</h4>
                    <div className="row">
                        <div className="col s12 l6">
                            <img className="responsive-img" src={recipe.img} alt=""/>
                        </div>
                        <div className="col s12 l6">
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
                                <input type="text" id="ingredients" onChange={handleIngredientChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="difficulty">난이도</label>
                                <input type="text" id="difficulty" onChange={handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="img">이미지</label>
                                <input type="text" id="img" onChange={handleChange}/>
                                <button onClick={handleImageButtonClick} type="button" className="btn brown lighten-2">이미지 업로드</button>
                            </div>
                        </div>
                    </div>
                    <div className="input-field">
                        {recipe.content.map((step, idx) => <RecipeContent step={idx} key={idx}/>)}
                    </div>
                    <div className="input-field center">
                        <button className="btn brown lighten-2" style={{marginRight:"4px"}} onClick={addContent}>내용 추가</button>
                        <button className="btn brown">레시피 등록</button>
                    </div>
                </form>
            </div>
    );
}
 
export default CreateRecipe;