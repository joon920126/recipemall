const initState = {
    favorite:[],
    recipe: []
}

const recipeAndProductReducer = (state=initState, action) => {
    switch(action.type){
        case 'ADD_TO_FAVORITE':
            if(state.favorite.indexOf(action.id)===-1){
                alert('즐겨찾기에 등록되었습니다.')
                return {
                    ...state,
                    favorite: [...state.favorite, action.id]
                }
            } else {
                alert('이미 즐겨찾기에 등록되어있는 레시피입니다.')
                return state
            }
        case 'REMOVE_FROM_FAVORITE':
            return{
                ...state,
                favorite: state.favorite.filter(item => item.id!==action.id)
            }
        case 'ADD_PRODUCT':
            console.log('created project', action.project)
            return state
        case 'ADD_PRODUCT_ERROR':
            console.log('create project error', action.err)
            return state 
        default: return state
    }
}

export default recipeAndProductReducer