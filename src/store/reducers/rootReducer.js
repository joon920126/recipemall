import { combineReducers } from 'redux';
import recipeAndProductReducer from './recipeAndProductReducer'
import qnaReducer from './qnaReducer'
import authReducer from './authReducer'
import cartReducer from './cartReducer'

import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers ({
    recipeAndProduct: recipeAndProductReducer,
    qna: qnaReducer,
    auth: authReducer,
    cart: cartReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
})

export default rootReducer