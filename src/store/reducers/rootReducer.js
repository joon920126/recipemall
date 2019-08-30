import { combineReducers } from 'redux';
import productReducer from './productReducer'
import recipeReducer from './recipeReducer'
import qnaReducer from './qnaReducer'
import authReducer from './authReducer'
import cartReducer from './cartReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers ({
    product: productReducer,
    recipe: recipeReducer,
    qna: qnaReducer,
    auth: authReducer,
    cart: cartReducer,
    search: searchReducer
})

export default rootReducer