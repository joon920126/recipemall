import React, { createContext, useState } from 'react';

export const RecipeContext = createContext()

const RecipeContextProvider = (props) => {
    const [recipe, setRecipe] = useState({
        name: '',
        time: 0,
        ingredients: [],
        difficulty: '',
        img: '',
        content: [],
        contentImg: []
    })

    return (
        <RecipeContext.Provider value={{recipe, setRecipe}}>
            {props.children}
        </RecipeContext.Provider>
    );
}
 
export default RecipeContextProvider;