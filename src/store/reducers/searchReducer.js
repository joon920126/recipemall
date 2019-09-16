const initState = {
    keyword: '',
    includeRecipe: true,
    includeProduct: true
}

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'SEARCH': {
            //console.log(`searching ${action.keyword}, recipe:${action.includeRecipe}, product:${action.includeProduct}`);
            
            return {
                ...state,
                keyword: action.keyword,
                includeRecipe: action.includeRecipe,
                includeProduct: action.includeProduct
            }
        }
        default: return state
    }
}

export default searchReducer