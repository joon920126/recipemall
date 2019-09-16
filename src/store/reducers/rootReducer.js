import { combineReducers } from 'redux';
import recipeAndProductReducer from './recipeAndProductReducer'
import qnaReducer from './qnaReducer'
import authReducer from './authReducer'
import cartReducer from './cartReducer'
import searchReducer from './searchReducer'
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers ({
    recipeAndProduct: recipeAndProductReducer,
    qna: qnaReducer,
    auth: authReducer,
    cart: cartReducer,
    search: searchReducer,
    firestore: firestoreReducer
})

export default rootReducer