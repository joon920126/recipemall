import React, {createContext, useState} from 'react'

export const RecipeContext = createContext()

const RecipeContextProvider = (props) => {
    const [recipe, setRecipe] = useState({
        id: '',
        name: '',
        time: 0,
        ingredients: [],
        difficulty: '',
        img: '',
        imgName: '',
        steps: [''],
        stepImg: [''],
        stepImgUrl: [''],
        stepImgName: [''],
        introduction: '',
        tag: [],
    })


    return (
        <RecipeContext.Provider value={{recipe, setRecipe}}>
            {props.children}
        </RecipeContext.Provider>
    )
}

export default RecipeContextProvider
