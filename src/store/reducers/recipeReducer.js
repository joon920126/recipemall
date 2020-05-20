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
    case 'ADD_TO_FAVORITE_SUCCESS':
        console.log('favorite added', action.recipe)
        alert('즐겨찾기에 등록되었습니다.')
        return state
    case 'ADD_TO_FAVORITE_ERROR':
        console.log('add to favorite error', action.err)
        return state
    case 'REMOVE_FROM_FAVORITE_SUCCESS':
        console.log('removed from favorite', action.recipe)
        alert('즐겨찾기에서 제거되었습니다.')
        return state
    default: return state
    }
}

export default recipeReducer
