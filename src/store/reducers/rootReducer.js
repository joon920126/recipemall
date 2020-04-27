import {combineReducers} from 'redux'
import recipeAndProductReducer from './recipeAndProductReducer'
import qnaReducer from './qnaReducer'
import authReducer from './authReducer'
import cartReducer from './cartReducer'
import recipeReducer from './recipeReducer'

import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    recipeAndProduct: recipeAndProductReducer,
    qna: qnaReducer,
    auth: authReducer,
    cart: cartReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    recipe: recipeReducer,
})

export default rootReducer
