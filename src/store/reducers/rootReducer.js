import { combineReducers } from 'redux';
import recipeAndProductReducer from './recipeAndProductReducer'
import qnaReducer from './qnaReducer'
import authReducer from './authReducer'
import cartReducer from './cartReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers ({
    recipeAndProduct: recipeAndProductReducer,
    qna: qnaReducer,
    auth: authReducer,
    cart: cartReducer,
    search: searchReducer
})

export default rootReducer