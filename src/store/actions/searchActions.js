export const search = (keyword, includeRecipe, includeProduct) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('recipeAndProduct').get().then(()=>{
            dispatch({type:"SEARCH", keyword, includeRecipe, includeProduct})
        })
    }
}