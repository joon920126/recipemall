const initState = {

}

const recipeReducer = (state=initState, action) => {
    switch (action.type) {
    case 'ADD_RECIPE':
        console.log('added recipe', action.recipe)
        return state
    case 'ADD_RECIPE_ERROR':
        console.log('add recipe error', action.err)
        return state
    case 'DELETE_RECIPE':
        console.log('delete recipe reducer', action.id)
        return state
    case 'DELETE_RECIPE_ERROR':
        console.log('delete recipe reducer error')
    default: return state
    }
}

export default recipeReducer
