const initState = {
    keyword: '',
    includeRecipe: true,
    includeProduct: true
}

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'SEARCH': {
            return {
                ...state,
                keyword: action.keyword
            }
        }
        default: return state
    }
}

export default searchReducer