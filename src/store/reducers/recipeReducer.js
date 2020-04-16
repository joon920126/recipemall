const initState = {

}

const recipeReducer = (state=initState, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            console.log('add recipe reducer')
            return state
        default: return state
    }
}